/* ──────────────────────────────────────────────────────────────
   Interactive Image Accordion — vanilla JS port
   Source: 21st.dev/r/minhxthanh/interactive-image-accordion

   Usage: initImageAccordion(containerEl, items, { defaultActive });
   item = { title, subtitle?, imageUrl, href? }
────────────────────────────────────────────────────────────── */
(function (global) {
  function el(tag, cls, attrs) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (attrs) for (const k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }

  global.initImageAccordion = function initImageAccordion(container, items, opts) {
    if (!container || !items || !items.length) return;
    const defaultActive =
      opts && typeof opts.defaultActive === "number" ? opts.defaultActive : 0;

    const panels = [];

    function setActive(target) {
      panels.forEach(function (p) {
        p.classList.toggle("active", p === target);
      });
    }

    items.forEach(function (item, i) {
      const panel = el("a", "iacc-item", { href: item.href || "#" });
      if (i === defaultActive) panel.classList.add("active");

      const img = el("img", null, {
        src: item.imageUrl, alt: item.title, loading: "lazy",
      });
      img.onerror = function () {
        this.onerror = null;
        this.src = "https://placehold.co/400x450/2d3748/ffffff?text=Image";
      };

      const overlay = el("div", "iacc-overlay", { "aria-hidden": "true" });
      const cap = el("span", "iacc-cap");
      cap.textContent = item.title;

      panel.append(img, overlay, cap);
      if (item.subtitle) {
        const sub = el("span", "iacc-sub");
        sub.textContent = item.subtitle;
        panel.appendChild(sub);
      }

      /* Hover expands (desktop). */
      panel.addEventListener("mouseenter", function () { setActive(panel); });

      /* Touch/click: first tap on a collapsed panel expands it without
       * navigating; tapping the already-active panel follows the link. */
      panel.addEventListener("click", function (e) {
        if (!panel.classList.contains("active")) {
          e.preventDefault();
          setActive(panel);
        }
      });

      panels.push(panel);
      container.appendChild(panel);
    });

    container.classList.add("iacc");
    if (opts && opts.logoMode) container.classList.add("logo-mode");
  };
})(window);
