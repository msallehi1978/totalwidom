<?php
/* Shared site chrome (head, nav, footer) so article pages match the
   rest of the Total Wisdom site exactly. Paths are root-absolute so
   they work under clean URLs like /articles/my-post. */

function tw_head($opts = []) {
    $title       = $opts['title']       ?? 'Total Wisdom Co.';
    $description = $opts['description']  ?? '';
    $canonical   = $opts['canonical']   ?? TW_ORIGIN . '/';
    $jsonld      = $opts['jsonld']       ?? null;   // array or null
    $extraCss    = $opts['extra_css']    ?? '';     // raw CSS string
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?= tw_e($title) ?></title>
  <meta name="description" content="<?= tw_e($description) ?>" />
  <link rel="canonical" href="<?= tw_e($canonical) ?>" />
<?php if ($jsonld): ?>
  <script type="application/ld+json"><?= json_encode($jsonld, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) ?></script>
<?php endif; ?>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/style.css" />
<?php if ($extraCss): ?>
  <style><?= $extraCss ?></style>
<?php endif; ?>
</head>
<body>
<?php
}

function tw_nav($active = '') {
    ?>
<nav id="navbar">
  <div class="nav-inner">
    <a href="/index.html" class="nav-logo">
      <img src="/assets/NTLOGOFinal-2.svg" alt="Total Wisdom Co." />
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="navLinks">
      <li><a href="/index.html"    data-page="home">Home</a></li>
      <li><a href="/services.html" data-page="services">Services</a></li>
      <li><a href="/products.html" data-page="products">Products</a></li>
      <li><a href="/articles"      data-page="articles"<?= $active === 'articles' ? ' class="active"' : '' ?>>Articles</a></li>
      <li><a href="/about.html"    data-page="about">About Us</a></li>
      <li><a href="/contact.html"  data-page="contact" class="nav-cta">Contact</a></li>
    </ul>
  </div>
</nav>
<?php
}

function tw_footer() {
    ?>
<footer class="footer">
  <div class="footer-main">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/index.html" class="nav-logo">
            <img src="/assets/NTLOGOFinal-2.svg" alt="Total Wisdom Co." />
          </a>
          <p>Dubai-based technology solutions provider specializing in cybersecurity, networking, and virtualization services.</p>
          <p class="tagline">A03 - 16F, Empire Heights A, Business Bay, Dubai, UAE</p>
        </div>
        <div class="footer-col">
          <h5>Navigation</h5>
          <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/services.html">Services</a></li>
            <li><a href="/products.html">Products</a></li>
            <li><a href="/articles">Articles</a></li>
            <li><a href="/about.html">About Us</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Solutions</h5>
          <ul>
            <li><a href="/products.html">OT/ICS Security</a></li>
            <li><a href="/products.html">Data Center</a></li>
            <li><a href="/products.html">IT Firewall</a></li>
            <li><a href="/products.html">Endpoint Protection</a></li>
            <li><a href="/products.html">Network Security</a></li>
            <li><a href="/products.html">Backup &amp; Recovery</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Contact</h5>
          <p><a href="tel:+971508338940">+971 50 833 8940</a></p>
          <p><a href="tel:+971508015940">+971 50 801 5940</a></p>
          <p><a href="mailto:info@totalwisdom.com">info@totalwisdom.com</a></p>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <p>&copy; 2024 Total Wisdom Co. All rights reserved.</p>
      <p>Secure IT &bull; Protect OT &bull; Deliver Smart Technology</p>
    </div>
  </div>
</footer>
<script src="/script.js"></script>
</body>
</html>
<?php
}
