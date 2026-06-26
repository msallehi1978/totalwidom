<?php
require_once __DIR__ . '/includes/bootstrap.php';

$slug = $_GET['slug'] ?? '';
$a = tw_valid_slug($slug) ? tw_load_article($slug) : null;

// Unpublished/draft articles are not publicly viewable.
if ($a && ($a['status'] ?? 'published') !== 'published') {
    $a = null;
}

$css = <<<CSS
.art-back { display:inline-flex; align-items:center; gap:.5rem; font-size:.82rem; font-weight:600; letter-spacing:.12em; text-transform:uppercase; color:var(--ink-soft); margin-bottom:1.4rem; }
.art-back:hover { color:var(--accent); }
.art-meta { display:flex; flex-wrap:wrap; gap:.6rem 1.1rem; align-items:center; margin-top:1.2rem; font-size:.85rem; color:var(--ink-soft); }
.art-meta .dot { width:4px; height:4px; border-radius:50%; background:var(--ink-soft); opacity:.6; }
.art-tags { display:flex; flex-wrap:wrap; gap:.5rem; margin-top:1.2rem; }
.art-tag { font-size:.72rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:var(--accent); border:1px solid var(--accent); border-radius:999px; padding:.32rem .8rem; }
.art-cover { margin:0 auto 2.4rem; max-width:760px; border-radius:16px; overflow:hidden; border:1px solid var(--line); box-shadow:0 18px 44px rgba(0,0,0,.3); }
.art-cover img { width:100%; height:auto; display:block; }
.art-prose { max-width:760px; margin:0 auto; }
.art-prose p { line-height:1.9; font-size:1.07rem; color:var(--ink); margin:0 0 1.4rem; }
.art-prose h2 { font-family:var(--font-serif); font-weight:700; font-size:1.6rem; letter-spacing:-.01em; margin:2.8rem 0 1.1rem; }
.art-prose h3 { font-family:var(--font-serif); font-weight:700; font-size:1.25rem; margin:2.2rem 0 .9rem; }
.art-prose ul, .art-prose ol { margin:0 0 1.6rem 1.2rem; padding:0; }
.art-prose li { line-height:1.7; color:var(--ink); margin:0 0 .5rem; }
.art-prose a { color:var(--accent); text-decoration:underline; }
.art-prose img { width:100%; height:auto; border-radius:12px; border:1px solid var(--line); margin:1.6rem 0; }
.art-prose blockquote { margin:2rem 0; padding:1.6rem 2rem; border-left:3px solid var(--accent); background:var(--bg-card); border-radius:0 12px 12px 0; font-family:var(--font-serif); font-size:1.2rem; line-height:1.6; color:var(--ink); }
.art-prose strong { color:var(--ink); }
@media(max-width:600px){ .art-prose p { font-size:1rem; } }
CSS;

if (!$a) {
    http_response_code(404);
    tw_head([
        'title'       => 'Article not found — Total Wisdom Co.',
        'description' => 'The requested article could not be found.',
        'canonical'   => TW_ORIGIN . '/articles',
        'extra_css'   => $css,
    ]);
    tw_nav('articles');
    echo '<section class="page-hero"><div class="container">';
    echo '<a href="/articles" class="art-back">&larr; All Articles</a>';
    echo '<h1>Article not found</h1>';
    echo '<p style="color:var(--ink-soft);margin-top:1rem;">Sorry, we couldn\'t find that article. <a href="/articles" style="color:var(--accent);">Browse all articles</a>.</p>';
    echo '</div></section>';
    tw_footer();
    exit;
}

$url = TW_ORIGIN . '/articles/' . $a['slug'];

$jsonld = [
    '@context' => 'https://schema.org',
    '@type'    => 'Article',
    'headline' => $a['title'],
    'description' => $a['excerpt'] ?? '',
    'datePublished' => $a['date'] ?? null,
    'dateModified'  => substr($a['updated'] ?? ($a['date'] ?? ''), 0, 10) ?: null,
    'inLanguage' => 'en',
    'mainEntityOfPage' => ['@type' => 'WebPage', '@id' => $url],
    'author' => ['@type' => 'Organization', 'name' => $a['author'] ?? 'Total Wisdom Co.'],
    'publisher' => [
        '@type' => 'Organization',
        'name'  => 'Total Wisdom Co.',
        'logo'  => ['@type' => 'ImageObject', 'url' => TW_ORIGIN . '/assets/NTLOGOFinal-2.svg'],
    ],
];
if (!empty($a['cover'])) {
    $jsonld['image'] = (strpos($a['cover'], 'http') === 0) ? $a['cover'] : TW_ORIGIN . $a['cover'];
}

tw_head([
    'title'       => $a['title'] . ' — Total Wisdom Co.',
    'description' => $a['excerpt'] ?? '',
    'canonical'   => $url,
    'jsonld'      => $jsonld,
    'extra_css'   => $css,
]);
tw_nav('articles');
?>

<section class="page-hero">
  <div class="container">
    <a href="/articles" class="art-back">&larr; All Articles</a>
    <div class="hero-breadcrumb">
      <a href="/index.html">Home</a><span>/</span><a href="/articles">Articles</a><span>/</span><span><?= tw_e($a['title']) ?></span>
    </div>
    <div class="section-tag"><?= tw_e($a['tags'][0] ?? 'Insights') ?></div>
    <h1><?= tw_e($a['title']) ?></h1>
    <div class="art-meta">
      <?php
        $meta = [];
        if (!empty($a['date']))   $meta[] = '<span>' . tw_e(tw_format_date($a['date'], true)) . '</span>';
        if (!empty($a['author'])) $meta[] = '<span>By ' . tw_e($a['author']) . '</span>';
        echo implode('<span class="dot"></span>', $meta);
      ?>
    </div>
    <?php if (!empty($a['tags'])): ?>
      <div class="art-tags">
        <?php foreach ($a['tags'] as $t): ?><span class="art-tag"><?= tw_e($t) ?></span><?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
</section>

<section class="section">
  <div class="container">
    <?php if (!empty($a['cover'])): ?>
      <figure class="art-cover"><img src="<?= tw_e($a['cover']) ?>" alt="<?= tw_e($a['title']) ?>" /></figure>
    <?php endif; ?>
    <div class="art-prose">
      <?= tw_sanitize_html($a['body'] ?? '') /* stored pre-sanitized; re-sanitized on render */ ?>
    </div>
  </div>
</section>

<section class="section-sm">
  <div class="container">
    <div class="cta-banner reveal">
      <h2>Have a question about <span class="accent">securing your environment</span>?</h2>
      <p>Our certified experts will assess your IT and OT/ICS landscape and design a tailored solution for your organization.</p>
      <div class="cta-actions">
        <a href="/contact.html" class="btn-primary lg">Talk to an Expert</a>
        <a href="/articles" class="btn-ghost lg">More Articles</a>
      </div>
    </div>
  </div>
</section>

<?php tw_footer(); ?>
