<?php
require_once __DIR__ . '/includes/bootstrap.php';

$articles = tw_list_articles(false);

$css = <<<CSS
.art-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.6rem; }
.art-card { display:flex; flex-direction:column; background:var(--bg-card); border:1px solid var(--line); border-radius:14px; overflow:hidden; text-decoration:none; color:inherit; transition:transform .25s ease, border-color .25s ease, box-shadow .25s ease; }
.art-card:hover { transform:translateY(-4px); border-color:var(--accent); box-shadow:0 18px 40px rgba(0,0,0,.28); }
.art-card-cover { aspect-ratio:16/9; background:#0c0c0c; overflow:hidden; }
.art-card-cover img { width:100%; height:100%; object-fit:cover; display:block; }
.art-card-body { padding:1.3rem 1.4rem 1.5rem; display:flex; flex-direction:column; flex:1; }
.art-card-meta { font-size:.74rem; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:var(--accent); margin-bottom:.7rem; }
.art-card h2 { font-family:var(--font-serif); font-weight:700; font-size:1.2rem; line-height:1.35; margin:0 0 .6rem; letter-spacing:-.01em; }
.art-card p { font-size:.9rem; line-height:1.6; color:var(--ink-soft); margin:0 0 1.1rem; }
.art-card-more { margin-top:auto; font-size:.8rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:var(--ink); display:inline-flex; align-items:center; gap:.4rem; }
.art-card:hover .art-card-more { color:var(--accent); }
.art-empty { padding:3rem 0; color:var(--ink-soft); }
@media(max-width:900px){ .art-grid { grid-template-columns:1fr 1fr; } }
@media(max-width:600px){ .art-grid { grid-template-columns:1fr; } }
CSS;

$jsonld = [
    '@context' => 'https://schema.org',
    '@type'    => 'Blog',
    '@id'      => TW_ORIGIN . '/articles#blog',
    'name'     => 'Total Wisdom Articles & Insights',
    'url'      => TW_ORIGIN . '/articles',
    'inLanguage' => 'en',
    'publisher' => [
        '@type' => 'Organization',
        'name'  => 'Total Wisdom Co.',
        'url'   => TW_ORIGIN . '/',
        'logo'  => TW_ORIGIN . '/assets/NTLOGOFinal-2.svg',
    ],
];

tw_head([
    'title'       => 'Articles & Insights — Total Wisdom Co.',
    'description' => 'Insights, guides, and analysis on OT/ICS security, IT cybersecurity, networking, and data-center technology from Total Wisdom Co.',
    'canonical'   => TW_ORIGIN . '/articles',
    'jsonld'      => $jsonld,
    'extra_css'   => $css,
]);
tw_nav('articles');
?>

<section class="page-hero">
  <div class="container">
    <div class="hero-breadcrumb">
      <a href="/index.html">Home</a><span>/</span><span>Articles</span>
    </div>
    <div class="section-tag">Insights</div>
    <h1>Articles &amp; Insights</h1>
    <p style="font-size:1.15rem;line-height:1.7;max-width:640px;color:var(--ink);margin-top:1.2rem;">
      Practical guidance and analysis on OT/ICS security, IT cybersecurity, networking, and data-center technology.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <?php if (!$articles): ?>
      <p class="art-empty">No articles published yet — check back soon.</p>
    <?php else: ?>
      <div class="art-grid">
        <?php foreach ($articles as $a): ?>
          <a class="art-card" href="/articles/<?= tw_e($a['slug']) ?>">
            <?php if (!empty($a['cover'])): ?>
              <div class="art-card-cover">
                <img src="<?= tw_e($a['cover']) ?>" alt="<?= tw_e($a['title']) ?>" loading="lazy" />
              </div>
            <?php endif; ?>
            <div class="art-card-body">
              <div class="art-card-meta">
                <?php $firstTag = !empty($a['tags'][0]) ? $a['tags'][0] . ' · ' : ''; ?>
                <?= tw_e($firstTag) . tw_e(tw_format_date($a['date'] ?? '')) ?>
              </div>
              <h2><?= tw_e($a['title']) ?></h2>
              <p><?= tw_e($a['excerpt'] ?? '') ?></p>
              <span class="art-card-more">Read article &rarr;</span>
            </div>
          </a>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
</section>

<?php tw_footer(); ?>
