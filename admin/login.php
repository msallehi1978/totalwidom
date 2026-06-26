<?php
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/ui.php';

if (tw_is_logged_in()) { header('Location: /admin/index.php'); exit; }

$error = '';
$setup = !tw_is_setup();   // first run → create the admin account

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    tw_csrf_check();
    $user = trim($_POST['user'] ?? '');
    $pass = (string)($_POST['pass'] ?? '');

    if ($setup) {
        $pass2 = (string)($_POST['pass2'] ?? '');
        if (strlen($user) < 3) {
            $error = 'Choose a username of at least 3 characters.';
        } elseif (strlen($pass) < 8) {
            $error = 'Choose a password of at least 8 characters.';
        } elseif ($pass !== $pass2) {
            $error = 'The two passwords do not match.';
        } else {
            tw_create_admin($user, $pass);
            tw_login($user);
            header('Location: /admin/index.php');
            exit;
        }
    } else {
        if (tw_verify_login($user, $pass)) {
            tw_login($user);
            header('Location: /admin/index.php');
            exit;
        }
        $error = 'Incorrect username or password.';
    }
}

tw_admin_head($setup ? 'Set up admin' : 'Log in', false);
?>
<div class="wrap narrow">
  <h1><?= $setup ? 'Create your admin account' : 'Log in' ?></h1>
  <p class="sub"><?= $setup
      ? 'This is the first time you are opening the admin panel. Choose a username and password to secure it.'
      : 'Enter your credentials to manage articles.' ?></p>

  <?php if ($error): ?><div class="msg err"><?= tw_e($error) ?></div><?php endif; ?>

  <form method="post" class="panel" autocomplete="off">
    <input type="hidden" name="csrf" value="<?= tw_e(tw_csrf_token()) ?>" />
    <label for="user">Username</label>
    <input type="text" id="user" name="user" required value="<?= tw_e($_POST['user'] ?? '') ?>" />

    <label for="pass">Password</label>
    <input type="password" id="pass" name="pass" required />

    <?php if ($setup): ?>
      <label for="pass2">Confirm password</label>
      <input type="password" id="pass2" name="pass2" required />
      <div class="hint">Minimum 8 characters. Store it somewhere safe — there is no email reset.</div>
    <?php endif; ?>

    <div class="actions">
      <button type="submit" class="btn btn-primary"><?= $setup ? 'Create account' : 'Log in' ?></button>
    </div>
  </form>
</div>
<?php tw_admin_foot(); ?>
