<?php
require_once __DIR__ . '/auth.php';
tw_logout();
header('Location: /admin/login.php');
exit;
