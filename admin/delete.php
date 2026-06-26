<?php
require_once __DIR__ . '/auth.php';
tw_require_login();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /admin/index.php'); exit;
}
tw_csrf_check();

$slug = $_POST['slug'] ?? '';
if (tw_valid_slug($slug)) {
    tw_delete_article($slug);
}
header('Location: /admin/index.php?msg=deleted');
exit;
