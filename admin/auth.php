<?php
/* Authentication + session + CSRF for the admin panel.
   Credentials are stored hashed in /content/.admin.json (denied to the web). */

require_once __DIR__ . '/../includes/bootstrap.php';

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

define('TW_AUTH_FILE', TW_CONTENT . '/.admin.json');

function tw_is_setup() {
    return is_file(TW_AUTH_FILE);
}

function tw_create_admin($user, $pass) {
    if (!is_dir(TW_CONTENT)) mkdir(TW_CONTENT, 0775, true);
    $data = [
        'user' => $user,
        'hash' => password_hash($pass, PASSWORD_DEFAULT),
    ];
    file_put_contents(TW_AUTH_FILE, json_encode($data, JSON_PRETTY_PRINT));
    @chmod(TW_AUTH_FILE, 0640);
    return true;
}

function tw_verify_login($user, $pass) {
    if (!tw_is_setup()) return false;
    $data = json_decode(file_get_contents(TW_AUTH_FILE), true);
    if (!is_array($data)) return false;
    if (!hash_equals((string)$data['user'], (string)$user)) return false;
    return password_verify($pass, $data['hash']);
}

function tw_login($user) {
    session_regenerate_id(true);
    $_SESSION['tw_admin'] = $user;
}

function tw_logout() {
    $_SESSION = [];
    session_destroy();
}

function tw_is_logged_in() {
    return !empty($_SESSION['tw_admin']);
}

function tw_require_login() {
    if (!tw_is_logged_in()) {
        header('Location: /admin/login.php');
        exit;
    }
}

/* ── CSRF ─────────────────────────────────────────────────── */
function tw_csrf_token() {
    if (empty($_SESSION['tw_csrf'])) {
        $_SESSION['tw_csrf'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['tw_csrf'];
}

function tw_csrf_check() {
    $sent = $_POST['csrf'] ?? '';
    if (empty($_SESSION['tw_csrf']) || !hash_equals($_SESSION['tw_csrf'], $sent)) {
        http_response_code(403);
        exit('Invalid request token. Please reload and try again.');
    }
}
