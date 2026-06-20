/* ──────────────────────────────────────────────────────────────
   Interactive Image Accordion — vanilla JS port
   Source: 21st.dev/r/minhxthanh/interactive-image-accordion

   Usage: initImageAccordion(containerEl, items, opts);
   item = { title, subtitle?, imageUrl, href? }
   opts = {
     defaultActive?: number,   // index of the panel expanded on load
     logoMode?: boolean,       // vendor logos on clean white tiles
     visibleCount?: number,    // products shown before the Load More tile
     step?: number,            // products revealed per Load More click
     loadMore?: boolean,       // append a "Load More" tile
     loadMoreLabel?: string
   }
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
    opts = opts || {};
    const defaultActive =
      typeof opts.defaultActive === "number" ? opts.defaultActive : 0;

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
    if (opts.logoMode) container.classList.add("logo-mode");

    /* ── Pagination: show a "Load More" tile that reveals more panels ── */
    const step = opts.step > 0 ? opts.step : items.length;
    let shown = opts.visibleCount > 0 ? Math.min(opts.visibleCount, items.length)
                                      : items.length;

    if (opts.loadMore && shown < items.length) {
      const initial = shown;            // window to collapse back to
      const moreLabel = opts.loadMoreLabel || "Load More";
      const lessLabel = opts.loadLessLabel || "Show Less";

      // Hide everything past the initial window.
      panels.forEach(function (p, i) {
        if (i >= initial) p.classList.add("iacc-hidden");
      });

      const tile = el("a", "iacc-item iacc-loadmore", {
        href: "#", role: "button",
      });
      const plus = el("span", "iacc-more-plus", { "aria-hidden": "true" });
      const cap = el("span", "iacc-cap");
      const sub = el("span", "iacc-sub");
      tile.append(plus, cap, sub);

      // Reflect the current state on the tile: "Load More (N more)" while
      // products remain hidden, or "Show Less" once everything is visible.
      function render() {
        const atEnd = shown >= items.length;
        tile.classList.toggle("iacc-showless", atEnd);
        plus.textContent = atEnd ? "−" : "+";   // − / +
        cap.textContent = atEnd ? lessLabel : moreLabel;
        if (atEnd) {
          sub.textContent = "";
          tile.setAttribute("aria-label", lessLabel);
        } else {
          const remaining = items.length - shown;
          sub.textContent = remaining + " more";
          tile.setAttribute("aria-label", moreLabel + " — " + remaining + " more");
        }
      }

      function toggle(e) {
        if (e) e.preventDefault();
        if (shown >= items.length) {
          // Collapse back to the initial window.
          for (let i = initial; i < items.length; i++) {
            panels[i].classList.add("iacc-hidden");
          }
          shown = initial;
          setActive(panels[0]);          // re-focus the first product
        } else {
          // Reveal the next batch.
          const next = Math.min(shown + step, items.length);
          for (let i = shown; i < next; i++) {
            panels[i].classList.remove("iacc-hidden");
          }
          shown = next;
        }
        render();
        container.appendChild(tile);     // keep the tile at the end
      }

      tile.addEventListener("mouseenter", function () { setActive(tile); });
      tile.addEventListener("click", toggle);

      render();
      container.appendChild(tile);
      panels.push(tile);
    }
  };
})(window);
