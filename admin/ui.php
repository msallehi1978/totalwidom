<?php
/* Minimal, self-contained admin chrome (its own styling so it works
   even before the public stylesheet exists). */

function tw_admin_head($title, $loggedIn = true) {
    $u = $_SESSION['tw_admin'] ?? '';
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex,nofollow" />
  <title><?= tw_e($title) ?> · Total Wisdom Admin</title>
  <style>
    :root{ --bg:#0e0f12; --panel:#16181d; --line:#262a31; --ink:#e9ebef; --soft:#9aa1ad; --accent:#e2b04a; --danger:#e05b5b; }
    *{ box-sizing:border-box; }
    body{ margin:0; background:var(--bg); color:var(--ink); font-family:"Inter",system-ui,sans-serif; font-size:15px; }
    a{ color:var(--accent); text-decoration:none; }
    .topbar{ display:flex; align-items:center; justify-content:space-between; padding:.9rem 1.4rem; border-bottom:1px solid var(--line); background:var(--panel); position:sticky; top:0; z-index:5; }
    .topbar .brand{ font-weight:800; letter-spacing:-.01em; }
    .topbar .brand span{ color:var(--accent); }
    .topbar nav{ display:flex; gap:1.2rem; align-items:center; font-size:.9rem; }
    .topbar nav .who{ color:var(--soft); }
    .wrap{ max-width:920px; margin:2rem auto; padding:0 1.4rem; }
    .wrap.narrow{ max-width:460px; }
    h1{ font-size:1.5rem; margin:0 0 .3rem; letter-spacing:-.01em; }
    .sub{ color:var(--soft); margin:0 0 1.8rem; font-size:.92rem; }
    .panel{ background:var(--panel); border:1px solid var(--line); border-radius:12px; padding:1.6rem; }
    label{ display:block; font-size:.82rem; font-weight:600; color:var(--soft); margin:1.1rem 0 .4rem; text-transform:uppercase; letter-spacing:.06em; }
    input[type=text], input[type=password], input[type=date], textarea, select{
      width:100%; background:#0c0d10; border:1px solid var(--line); border-radius:8px; color:var(--ink);
      padding:.7rem .8rem; font-size:.95rem; font-family:inherit; }
    input:focus, textarea:focus{ outline:none; border-color:var(--accent); }
    .hint{ font-size:.78rem; color:var(--soft); margin-top:.35rem; }
    .row{ display:flex; gap:1rem; flex-wrap:wrap; }
    .row > div{ flex:1; min-width:180px; }
    .btn{ display:inline-flex; align-items:center; gap:.4rem; border:1px solid var(--line); background:#1d2027; color:var(--ink); padding:.6rem 1.1rem; border-radius:8px; font-weight:600; font-size:.9rem; cursor:pointer; }
    .btn:hover{ border-color:var(--soft); }
    .btn-primary{ background:var(--accent); border-color:var(--accent); color:#1a1300; }
    .btn-primary:hover{ filter:brightness(1.05); }
    .btn-danger{ color:var(--danger); border-color:#3a2326; }
    .btn-danger:hover{ background:#2a1416; }
    .actions{ display:flex; gap:.7rem; margin-top:1.8rem; align-items:center; }
    .msg{ padding:.8rem 1rem; border-radius:8px; margin-bottom:1.4rem; font-size:.9rem; }
    .msg.err{ background:#2a1416; border:1px solid #3a2326; color:#f0a9a9; }
    .msg.ok{ background:#142a18; border:1px solid #224a2a; color:#a9f0b8; }
    table{ width:100%; border-collapse:collapse; }
    th,td{ text-align:left; padding:.85rem 1rem; border-bottom:1px solid var(--line); font-size:.92rem; }
    th{ color:var(--soft); font-size:.76rem; text-transform:uppercase; letter-spacing:.06em; }
    tr:last-child td{ border-bottom:none; }
    .badge{ font-size:.7rem; padding:.2rem .55rem; border-radius:999px; font-weight:700; text-transform:uppercase; letter-spacing:.05em; }
    .badge.pub{ background:#142a18; color:#a9f0b8; }
    .badge.draft{ background:#2a2414; color:#f0dca9; }
    .tbl-actions{ display:flex; gap:.6rem; justify-content:flex-end; }
    .empty{ color:var(--soft); padding:2rem 0; text-align:center; }
    .cover-preview{ margin-top:.7rem; max-width:240px; border-radius:8px; border:1px solid var(--line); display:block; }
    .ql-editor{ min-height:320px; font-size:1rem; }
    .ql-toolbar, .ql-container{ border-color:var(--line) !important; }
    .ql-container{ background:#0c0d10; border-radius:0 0 8px 8px; }
    .ql-toolbar{ background:#15171c; border-radius:8px 8px 0 0; }
    .ql-snow .ql-stroke{ stroke:#c7ccd6; } .ql-snow .ql-fill{ fill:#c7ccd6; }
    .ql-snow .ql-picker{ color:#c7ccd6; }
  </style>
</head>
<body>
<div class="topbar">
  <div class="brand">TOTAL <span>WISDOM</span> · Admin</div>
  <nav>
<?php if ($loggedIn): ?>
    <a href="/admin/index.php">Articles</a>
    <a href="/articles" target="_blank">View site ↗</a>
    <span class="who"><?= tw_e($u) ?></span>
    <a href="/admin/logout.php">Log out</a>
<?php endif; ?>
  </nav>
</div>
<?php
}

function tw_admin_foot() {
    echo "\n</body>\n</html>";
}
