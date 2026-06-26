<?php
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/ui.php';
tw_require_login();

$editingSlug = $_GET['slug'] ?? '';
$isEdit = $editingSlug !== '' && tw_valid_slug($editingSlug);
$error = '';

// Defaults for a new article.
$article = [
    'slug' => '', 'title' => '', 'excerpt' => '', 'cover' => '',
    'date' => date('Y-m-d'), 'author' => 'Total Wisdom Team',
    'tags' => [], 'status' => 'published', 'body' => '',
];

if ($isEdit) {
    $loaded = tw_load_article($editingSlug);
    if (!$loaded) { header('Location: /admin/index.php'); exit; }
    $article = array_merge($article, $loaded);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    tw_csrf_check();
    $title   = trim($_POST['title'] ?? '');
    $slugIn  = trim($_POST['slug'] ?? '');
    $excerpt = trim($_POST['excerpt'] ?? '');
    $cover   = trim($_POST['cover'] ?? '');
    $date    = trim($_POST['date'] ?? '') ?: date('Y-m-d');
    $author  = trim($_POST['author'] ?? '');
    $tagsRaw = trim($_POST['tags'] ?? '');
    $status  = ($_POST['status'] ?? 'published') === 'draft' ? 'draft' : 'published';
    $body    = tw_sanitize_html($_POST['body'] ?? '');

    $tags = array_values(array_filter(array_map('trim', explode(',', $tagsRaw)), 'strlen'));

    if ($title === '') {
        $error = 'A title is required.';
    } else {
        // Determine slug: keep existing on edit unless changed; otherwise derive.
        $baseSlug = $slugIn !== '' ? $slugIn : $title;
        $newSlug  = tw_slugify($baseSlug);

        if ($isEdit && $newSlug === $editingSlug) {
            $slug = $editingSlug;            // unchanged
        } else {
            $slug = tw_unique_slug($newSlug, $isEdit ? $editingSlug : null);
        }

        $record = [
            'slug' => $slug, 'title' => $title, 'excerpt' => $excerpt,
            'cover' => $cover, 'date' => $date, 'author' => $author,
            'tags' => $tags, 'status' => $status, 'body' => $body,
        ];
        if ($isEdit) {
            $old = tw_load_article($editingSlug);
            if ($old && isset($old['created'])) $record['created'] = $old['created'];
            // If the slug changed on edit, remove the old file.
            if ($slug !== $editingSlug) tw_delete_article($editingSlug);
        }
        tw_save_article($record);
        header('Location: /admin/index.php?msg=saved');
        exit;
    }
    // On error, keep submitted values in the form.
    $article = array_merge($article, [
        'title' => $title, 'slug' => $slugIn, 'excerpt' => $excerpt, 'cover' => $cover,
        'date' => $date, 'author' => $author, 'tags' => $tags, 'status' => $status, 'body' => $body,
    ]);
}

tw_admin_head($isEdit ? 'Edit article' : 'New article');
?>
<link href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css" rel="stylesheet" />
<div class="wrap">
  <h1><?= $isEdit ? 'Edit article' : 'New article' ?></h1>
  <p class="sub"><?= $isEdit ? 'Editing /articles/' . tw_e($article['slug']) : 'Fill in the details and publish.' ?></p>

  <?php if ($error): ?><div class="msg err"><?= tw_e($error) ?></div><?php endif; ?>

  <form method="post" class="panel" id="articleForm">
    <input type="hidden" name="csrf" value="<?= tw_e(tw_csrf_token()) ?>" />

    <label for="title">Title</label>
    <input type="text" id="title" name="title" required value="<?= tw_e($article['title']) ?>" />

    <div class="row">
      <div>
        <label for="slug">URL slug <span style="text-transform:none;font-weight:400;">(optional)</span></label>
        <input type="text" id="slug" name="slug" value="<?= tw_e($article['slug']) ?>" placeholder="auto from title" />
        <div class="hint">Lives at /articles/<span id="slugPreview"><?= tw_e($article['slug'] ?: 'your-title') ?></span></div>
      </div>
      <div>
        <label for="date">Publish date</label>
        <input type="date" id="date" name="date" value="<?= tw_e($article['date']) ?>" />
      </div>
    </div>

    <div class="row">
      <div>
        <label for="author">Author</label>
        <input type="text" id="author" name="author" value="<?= tw_e($article['author']) ?>" />
      </div>
      <div>
        <label for="status">Status</label>
        <select id="status" name="status">
          <option value="published" <?= $article['status'] === 'published' ? 'selected' : '' ?>>Published</option>
          <option value="draft" <?= $article['status'] === 'draft' ? 'selected' : '' ?>>Draft (hidden)</option>
        </select>
      </div>
    </div>

    <label for="tags">Tags <span style="text-transform:none;font-weight:400;">(comma-separated)</span></label>
    <input type="text" id="tags" name="tags" value="<?= tw_e(implode(', ', $article['tags'])) ?>" placeholder="OT Security, ICS, CYRUS" />

    <label for="excerpt">Excerpt / summary</label>
    <textarea id="excerpt" name="excerpt" rows="2" placeholder="One or two sentences shown on the listing and in search results."><?= tw_e($article['excerpt']) ?></textarea>

    <label>Cover image <span style="text-transform:none;font-weight:400;">(optional)</span></label>
    <input type="hidden" name="cover" id="cover" value="<?= tw_e($article['cover']) ?>" />
    <input type="file" id="coverFile" accept="image/*" />
    <div class="hint" id="coverStatus"></div>
    <img id="coverPreview" class="cover-preview" src="<?= tw_e($article['cover']) ?>" alt="" style="<?= $article['cover'] ? '' : 'display:none;' ?>" />

    <label>Body</label>
    <div id="editor"></div>
    <textarea name="body" id="body" style="display:none;"><?= tw_e($article['body']) ?></textarea>

    <div class="actions">
      <button type="submit" class="btn btn-primary"><?= $isEdit ? 'Save changes' : 'Publish' ?></button>
      <a class="btn" href="/admin/index.php">Cancel</a>
    </div>
  </form>
</div>

<script src="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.js"></script>
<script>
(function () {
  var csrf = <?= json_encode(tw_csrf_token()) ?>;

  // Slug live preview
  var titleEl = document.getElementById('title');
  var slugEl  = document.getElementById('slug');
  var slugPrev = document.getElementById('slugPreview');
  function slugify(s){ return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') || 'your-title'; }
  function updateSlugPreview(){ slugPrev.textContent = slugify(slugEl.value || titleEl.value); }
  titleEl.addEventListener('input', updateSlugPreview);
  slugEl.addEventListener('input', updateSlugPreview);

  // Quill editor
  var quill = new Quill('#editor', {
    theme: 'snow',
    placeholder: 'Write your article…',
    modules: {
      toolbar: {
        container: [
          [{ header: [2, 3, false] }],
          ['bold', 'italic', 'underline', 'link', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['image', 'clean']
        ],
        handlers: { image: imageHandler }
      }
    }
  });

  // Load existing body
  var bodyEl = document.getElementById('body');
  if (bodyEl.value) { quill.clipboard.dangerouslyPasteHTML(bodyEl.value); }

  // Inline image upload -> /admin/upload.php
  function imageHandler() {
    var input = document.createElement('input');
    input.type = 'file'; input.accept = 'image/*';
    input.onchange = function () {
      if (!input.files[0]) return;
      uploadImage(input.files[0], function (url) {
        var range = quill.getSelection(true);
        quill.insertEmbed(range.index, 'image', url, 'user');
        quill.setSelection(range.index + 1);
      });
    };
    input.click();
  }

  function uploadImage(file, onDone) {
    var fd = new FormData();
    fd.append('image', file);
    fd.append('csrf', csrf);
    fetch('/admin/upload.php', { method: 'POST', body: fd })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (d && d.url) { onDone(d.url); }
        else { alert('Upload failed: ' + (d && d.error ? d.error : 'unknown error')); }
      })
      .catch(function () { alert('Upload failed (network).'); });
  }

  // Cover upload
  var coverFile = document.getElementById('coverFile');
  var coverInput = document.getElementById('cover');
  var coverPreview = document.getElementById('coverPreview');
  var coverStatus = document.getElementById('coverStatus');
  coverFile.addEventListener('change', function () {
    if (!coverFile.files[0]) return;
    coverStatus.textContent = 'Uploading…';
    uploadImage(coverFile.files[0], function (url) {
      coverInput.value = url;
      coverPreview.src = url;
      coverPreview.style.display = 'block';
      coverStatus.textContent = 'Cover uploaded.';
    });
  });

  // Sync editor HTML into the textarea on submit
  document.getElementById('articleForm').addEventListener('submit', function () {
    var html = quill.root.innerHTML;
    if (html === '<p><br></p>') html = '';
    bodyEl.value = html;
  });
})();
</script>
<?php tw_admin_foot(); ?>
