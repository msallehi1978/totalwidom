/* ──────────────────────────────────────────────────────────────
   Scroll Reel Testimonials — vanilla JS port
   Source: 21st.dev/r/smammar100/scroll-reel-testimonials

   Counter-rotating scroll reel + per-character text rise.
   The middle column is a vertical list of portraits that translates
   by one "pitch" per step; the outer columns counter-rotate. Text
   animates in character-by-character; the old block exits as a whole
   before the new characters rise in sequence.

   Usage:  initScrollReel(containerEl, testimonials, { charStaggerMs });
   where each testimonial = { quote, author, image, alt? }
────────────────────────────────────────────────────────────── */
(function (global) {
  /* Geometry — middle column pitch between portrait centers:
   * 3 * (cell 121.33px + gap 8px) = 388px */
  const CELL = 121.33;
  const GAP = 8;
  const STEP = 3 * (CELL + GAP);

  const EXIT_MS = 240;  // old text removed / new text mounted
  const SLIDE_MS = 800; // column slide duration + interaction lock
  const EASE_INOUT = "cubic-bezier(0.65,0,0.35,1)";

  const QUOTE_ICON =
    'M4.58 17.32C3.55 16.23 3 15 3 13.01c0-3.5 2.46-6.64 6.03-8.19l.9 1.38c-3.34 1.8-4 4.15-4.25 5.62.54-.28 1.24-.38 1.93-.31 1.8.17 3.23 1.65 3.23 3.49a3.5 3.5 0 0 1-3.5 3.5c-1.07 0-2.1-.49-2.75-1.18zm10 0C13.55 16.23 13 15 13 13.01c0-3.5 2.46-6.64 6.03-8.19l.9 1.38c-3.34 1.8-4 4.15-4.25 5.62.54-.28 1.24-.38 1.93-.31 1.8.17 3.23 1.65 3.23 3.49a3.5 3.5 0 0 1-3.5 3.5c-1.07 0-2.1-.49-2.75-1.18z';

  function el(tag, cls, attrs) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (attrs) for (const k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }

  function makeCell() {
    return el("div", "srt-cell", { "aria-hidden": "true" });
  }

  function makeFeatured(src, alt) {
    const wrap = el("div", "srt-featured");
    const img = el("img", null, { src: src, alt: alt || "", loading: "lazy" });
    const desat = el("div", "srt-desat", { "aria-hidden": "true" });
    const sheen = el("div", "srt-sheen", { "aria-hidden": "true" });
    wrap.append(img, desat, sheen);
    return wrap;
  }

  /* Per-character split. Spaces live between word spans as plain text
   * nodes so natural line-wrapping is preserved. Each char rises in
   * with an inline animation-delay. */
  function appendChars(target, text, startIndex, staggerMs) {
    let idx = startIndex;
    const words = text.split(" ");
    words.forEach(function (word, wi) {
      const wordSpan = el("span");
      wordSpan.style.display = "inline-block";
      wordSpan.style.whiteSpace = "nowrap";
      Array.from(word).forEach(function (ch) {
        const c = el("span", "scroll-reel-char");
        c.style.animationDelay = idx * staggerMs + "ms";
        c.textContent = ch;
        wordSpan.appendChild(c);
        idx++;
      });
      target.appendChild(wordSpan);
      if (wi < words.length - 1) {
        target.appendChild(document.createTextNode(" "));
        idx++;
      }
    });
  }

  function buildBlock(t, staggerMs) {
    const block = el("div", "srt-block");
    const quote = el("p", "srt-quote");
    appendChars(quote, t.quote, 0, staggerMs);
    const author = el("p", "srt-author");
    appendChars(author, t.author, t.quote.length + 6, staggerMs);
    block.append(quote, author);
    return block;
  }

  function svgIcon(viewBox, inner, cls) {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", viewBox);
    svg.setAttribute("aria-hidden", "true");
    if (cls) svg.setAttribute("class", cls);
    svg.innerHTML = inner;
    return svg;
  }

  global.initScrollReel = function initScrollReel(container, testimonials, opts) {
    if (!container || !testimonials || !testimonials.length) return;
    const charStaggerMs = (opts && opts.charStaggerMs) || 6;
    const count = testimonials.length;

    /* State */
    let index = 0;
    let displayIndex = 0;
    let mounted = false;
    let animating = false;
    const timeouts = [];

    /* ── Build static structure ── */
    const root = el("div", "srt", {
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": (opts && opts.ariaLabel) || "Testimonials",
      tabindex: "0",
    });
    if (opts && opts.logoMode) root.classList.add("logo-mode");

    /* Reel */
    const reel = el("div", "srt-reel", { "aria-hidden": "true" });
    const reelInner = el("div", "srt-reel-inner");
    const leftCol = el("div", "srt-col");
    const midCol = el("div", "srt-col");
    const rightCol = el("div", "srt-col");

    const sideCellCount = 4 + 2 * count;
    for (let i = 0; i < sideCellCount; i++) {
      leftCol.appendChild(makeCell());
      rightCol.appendChild(makeCell());
    }

    /* Middle: 3 leading cells, featured + 2 cells between each, 3 trailing */
    for (let i = 0; i < 3; i++) midCol.appendChild(makeCell());
    testimonials.forEach(function (t, i) {
      midCol.appendChild(makeFeatured(t.image, t.alt));
      if (i < count - 1) {
        midCol.appendChild(makeCell());
        midCol.appendChild(makeCell());
      }
    });
    for (let i = 0; i < 3; i++) midCol.appendChild(makeCell());

    reelInner.append(leftCol, midCol, rightCol);
    reel.appendChild(reelInner);

    /* Content */
    const content = el("div", "srt-content");
    const head = el("div", "srt-head");
    const icon = svgIcon("0 0 24 24", '<path fill="currentColor" d="' + QUOTE_ICON + '"/>', "srt-quote-icon");

    const stage = el("div", "srt-stage", { "aria-live": "polite" });
    const sizer = el("div", "srt-sizer", { "aria-hidden": "true" });
    const sizerQuote = el("p", "srt-quote");
    const sizerAuthor = el("p", "srt-author");
    sizer.append(sizerQuote, sizerAuthor);

    let activeBlock = buildBlock(testimonials[0], charStaggerMs);
    sizerQuote.textContent = testimonials[0].quote;
    sizerAuthor.textContent = testimonials[0].author;

    stage.append(sizer, activeBlock);
    head.append(icon, stage);

    /* Controls */
    const controls = el("div", "srt-controls");
    const prevBtn = el("button", "srt-btn", { type: "button", "aria-label": "Previous testimonial" });
    prevBtn.appendChild(svgIcon("0 0 12 12",
      '<path d="M7.5 2.5 3.5 6l4 3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'));
    const nextBtn = el("button", "srt-btn", { type: "button", "aria-label": "Next testimonial" });
    nextBtn.appendChild(svgIcon("0 0 12 12",
      '<path d="m4.5 2.5 4 3.5-4 3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'));
    controls.append(prevBtn, nextBtn);

    content.append(head, controls);
    root.append(reel, content);
    container.appendChild(root);

    /* ── Layout helpers ── */
    const centerIdx = (count - 1) / 2;

    function applyColumns() {
      const middleY = (centerIdx - index) * STEP;
      const sideY = -middleY;
      const trans = mounted ? "transform " + SLIDE_MS + "ms " + EASE_INOUT : "none";
      midCol.style.transform = "translateY(" + middleY + "px)";
      midCol.style.transition = trans;
      leftCol.style.transform = "translateY(" + sideY + "px)";
      leftCol.style.transition = trans;
      rightCol.style.transform = "translateY(" + sideY + "px)";
      rightCol.style.transition = trans;
    }

    function updateButtons() {
      prevBtn.disabled = index === 0;
      nextBtn.disabled = index === count - 1;
    }

    function paginate(dir) {
      if (animating) return;
      const next = index + dir;
      if (next < 0 || next >= count) return;
      animating = true;

      index = next;
      applyColumns();      // slides the reel
      updateButtons();

      activeBlock.classList.add("scroll-reel-exit"); // exit old text

      timeouts.push(setTimeout(function () {
        displayIndex = next;
        const t = testimonials[displayIndex];
        const fresh = buildBlock(t, charStaggerMs);
        sizerQuote.textContent = t.quote;
        sizerAuthor.textContent = t.author;
        stage.replaceChild(fresh, activeBlock);
        activeBlock = fresh; // new chars rise in
      }, EXIT_MS));

      timeouts.push(setTimeout(function () {
        animating = false;
      }, SLIDE_MS));
    }

    prevBtn.addEventListener("click", function () { paginate(-1); });
    nextBtn.addEventListener("click", function () { paginate(1); });
    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); paginate(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); paginate(-1); }
    });

    /* Initial paint at starting offset with no slide-in; enable
     * transitions only after first paint. */
    applyColumns();
    updateButtons();
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        mounted = true;
      });
    });
  };
})(window);
