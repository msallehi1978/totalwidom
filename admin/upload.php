<?php
/* Image upload endpoint for the editor (cover + inline images).
   Returns JSON: { "url": "/uploads/articles/xxx.jpg" } or { "error": "..." }. */

require_once __DIR__ . '/auth.php';
header('Content-Type: application/json');

if (!tw_is_logged_in()) {
    http_response_code(401);
    echo json_encode(['error' => 'Not authorized']); exit;
}
tw_csrf_check();

if (empty($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['error' => 'No file received']); exit;
}

$file = $_FILES['image'];

// Size limit: 6 MB.
if ($file['size'] > 6 * 1024 * 1024) {
    http_response_code(400);
    echo json_encode(['error' => 'Image is larger than 6 MB']); exit;
}

// Validate it is a real image and pick a safe extension by detected type.
$info = @getimagesize($file['tmp_name']);
if ($info === false) {
    http_response_code(400);
    echo json_encode(['error' => 'File is not a valid image']); exit;
}
$map = [
    IMAGETYPE_JPEG => 'jpg',
    IMAGETYPE_PNG  => 'png',
    IMAGETYPE_GIF  => 'gif',
    IMAGETYPE_WEBP => 'webp',
];
if (!isset($map[$info[2]])) {
    http_response_code(400);
    echo json_encode(['error' => 'Unsupported format (use JPG, PNG, GIF, or WebP)']); exit;
}
$ext = $map[$info[2]];

if (!is_dir(TW_UPLOADS)) { mkdir(TW_UPLOADS, 0775, true); }

$name = date('Ymd-His') . '-' . bin2hex(random_bytes(4)) . '.' . $ext;
$dest = TW_UPLOADS . '/' . $name;

if (!move_uploaded_file($file['tmp_name'], $dest)) {
    http_response_code(500);
    echo json_encode(['error' => 'Could not save file (check folder permissions)']); exit;
}
@chmod($dest, 0644);

echo json_encode(['url' => '/uploads/articles/' . $name]);
