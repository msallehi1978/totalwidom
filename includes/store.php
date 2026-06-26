<?php
/* Flat-file article store. One JSON file per article in /content/articles.
   No database required. */

/* ── Slug helpers ─────────────────────────────────────────── */
function tw_slugify($str) {
    $str = strtolower(trim((string)$str));
    $str = preg_replace('/[^a-z0-9]+/', '-', $str);
    $str = trim($str, '-');
    return $str !== '' ? $str : 'article';
}

/* Validate a slug coming from a URL — blocks path traversal. */
function tw_valid_slug($slug) {
    return is_string($slug) && preg_match('/^[a-z0-9][a-z0-9-]*$/', $slug);
}

function tw_article_path($slug) {
    return TW_ARTICLES . '/' . $slug . '.json';
}

/* Ensure a slug is unique; if taken, append -2, -3, … */
function tw_unique_slug($slug, $exclude = null) {
    $slug = tw_slugify($slug);
    $candidate = $slug;
    $i = 2;
    while (file_exists(tw_article_path($candidate)) && $candidate !== $exclude) {
        $candidate = $slug . '-' . $i;
        $i++;
    }
    return $candidate;
}

/* ── Read ─────────────────────────────────────────────────── */
function tw_load_article($slug) {
    if (!tw_valid_slug($slug)) return null;
    $path = tw_article_path($slug);
    if (!is_file($path)) return null;
    $data = json_decode(file_get_contents($path), true);
    if (!is_array($data)) return null;
    $data['slug'] = $slug;
    return $data;
}

/* List articles, newest first. Drafts excluded unless $includeDrafts. */
function tw_list_articles($includeDrafts = false) {
    $out = [];
    if (!is_dir(TW_ARTICLES)) return $out;
    foreach (glob(TW_ARTICLES . '/*.json') as $file) {
        $data = json_decode(file_get_contents($file), true);
        if (!is_array($data)) continue;
        $data['slug'] = basename($file, '.json');
        if (!$includeDrafts && ($data['status'] ?? 'published') !== 'published') continue;
        $out[] = $data;
    }
    usort($out, function ($a, $b) {
        return strcmp(($b['date'] ?? ''), ($a['date'] ?? ''));
    });
    return $out;
}

/* ── Write ────────────────────────────────────────────────── */
function tw_save_article(array $data) {
    if (!is_dir(TW_ARTICLES)) {
        mkdir(TW_ARTICLES, 0775, true);
    }
    $slug = $data['slug'];
    $path = tw_article_path($slug);
    $data['updated'] = date('c');
    if (!isset($data['created'])) $data['created'] = $data['updated'];
    file_put_contents($path, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));
    return true;
}

function tw_delete_article($slug) {
    if (!tw_valid_slug($slug)) return false;
    $path = tw_article_path($slug);
    if (is_file($path)) return unlink($path);
    return false;
}

/* ── Output helpers ───────────────────────────────────────── */
function tw_e($s) { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }

function tw_format_date($iso, $long = false) {
    if (!$iso) return '';
    $ts = strtotime($iso);
    if ($ts === false) return $iso;
    return date($long ? 'F j, Y' : 'M j, Y', $ts);
}

/* Conservative sanitizer for body HTML produced by the admin WYSIWYG.
   The author is a trusted, authenticated admin, but we still strip
   active content as defense-in-depth. */
function tw_sanitize_html($html) {
    $html = (string)$html;
    // Remove dangerous elements entirely (with their contents).
    $html = preg_replace('#<(script|style|iframe|object|embed|form)[^>]*>.*?</\1>#is', '', $html);
    $html = preg_replace('#<(script|style|iframe|object|embed|form)[^>]*/?>#is', '', $html);
    // Strip inline event handlers (onclick, onerror, …).
    $html = preg_replace('/\son\w+\s*=\s*"[^"]*"/i', '', $html);
    $html = preg_replace("/\son\w+\s*=\s*'[^']*'/i", '', $html);
    $html = preg_replace('/\son\w+\s*=\s*[^\s>]+/i', '', $html);
    // Neutralize javascript: URLs.
    $html = preg_replace('/(href|src)\s*=\s*("|\')\s*javascript:[^"\']*\2/i', '$1=$2#$2', $html);
    return trim($html);
}
