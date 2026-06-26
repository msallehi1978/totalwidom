<?php
/* Shared bootstrap for the Total Wisdom articles CMS.
   Defines paths and loads the storage + layout helpers. */

if (!defined('TW_ROOT')) {
    define('TW_ROOT', dirname(__DIR__));            // project root (ver4/)
}
define('TW_CONTENT',  TW_ROOT . '/content');         // data store (deny web access)
define('TW_ARTICLES', TW_CONTENT . '/articles');     // one JSON file per article
define('TW_UPLOADS',  TW_ROOT . '/uploads/articles'); // uploaded images (web-served)

// Public site origin — used for canonical URLs and structured data.
define('TW_ORIGIN', 'https://totalwisdom.com');

require_once __DIR__ . '/store.php';
require_once __DIR__ . '/layout.php';
