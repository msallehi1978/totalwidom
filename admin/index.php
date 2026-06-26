<?php
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/ui.php';
tw_require_login();

$articles = tw_list_articles(true);   // include drafts in the dashboard
$flash = $_GET['msg'] ?? '';

tw_admin_head('Articles');
?>
<div class="wrap">
  <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:1rem;flex-wrap:wrap;">
    <div>
      <h1>Articles</h1>
      <p class="sub"><?= count($articles) ?> article<?= count($articles) === 1 ? '' : 's' ?> total</p>
    </div>
    <a class="btn btn-primary" href="/admin/edit.php">+ New article</a>
  </div>

  <?php if ($flash === 'saved'): ?><div class="msg ok">Article saved.</div><?php endif; ?>
  <?php if ($flash === 'deleted'): ?><div class="msg ok">Article deleted.</div><?php endif; ?>

  <div class="panel" style="padding:0;overflow:hidden;">
    <?php if (!$articles): ?>
      <div class="empty">No articles yet. Click <strong>“New article”</strong> to write your first one.</div>
    <?php else: ?>
      <table>
        <thead>
          <tr><th>Title</th><th>Date</th><th>Status</th><th style="text-align:right;">Actions</th></tr>
        </thead>
        <tbody>
          <?php foreach ($articles as $a):
            $status = $a['status'] ?? 'published'; ?>
            <tr>
              <td>
                <strong><?= tw_e($a['title']) ?></strong><br />
                <span style="color:var(--soft);font-size:.8rem;">/articles/<?= tw_e($a['slug']) ?></span>
              </td>
              <td><?= tw_e(tw_format_date($a['date'] ?? '')) ?></td>
              <td>
                <?php if ($status === 'published'): ?>
                  <span class="badge pub">Published</span>
                <?php else: ?>
                  <span class="badge draft">Draft</span>
                <?php endif; ?>
              </td>
              <td>
                <div class="tbl-actions">
                  <a class="btn" href="/admin/edit.php?slug=<?= urlencode($a['slug']) ?>">Edit</a>
                  <?php if ($status === 'published'): ?>
                    <a class="btn" href="/articles/<?= urlencode($a['slug']) ?>" target="_blank">View</a>
                  <?php endif; ?>
                  <form method="post" action="/admin/delete.php" onsubmit="return confirm('Delete “<?= tw_e($a['title']) ?>”? This cannot be undone.');" style="display:inline;">
                    <input type="hidden" name="csrf" value="<?= tw_e(tw_csrf_token()) ?>" />
                    <input type="hidden" name="slug" value="<?= tw_e($a['slug']) ?>" />
                    <button type="submit" class="btn btn-danger">Delete</button>
                  </form>
                </div>
              </td>
            </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
    <?php endif; ?>
  </div>
</div>
<?php tw_admin_foot(); ?>
