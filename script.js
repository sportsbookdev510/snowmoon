/* ===== CONFIG (real values from snowmoon.pro) ===== */
const CONFIG = {
  CA: "0x3d08c83f21b546c58c67bd3ce762aa8c5bd1a7a0",
  CHAIN: "ethereum",
  PAIR: "0x3d08c83f21b546c58c67bd3ce762aa8c5bd1a7a0",
  BUY: "https://app.uniswap.org/swap?chain=mainnet&outputCurrency=0x3d08c83f21b546c58c67bd3ce762aa8c5bd1a7a0",
  GMGN: "https://gmgn.ai/eth/token/0x3d08c83f21b546c58c67bd3ce762aa8c5bd1a7a0",
  CHART:
    "https://dexscreener.com/ethereum/0x3d08c83f21b546c58c67bd3ce762aa8c5bd1a7a0",
  X: "https://x.com/snowmoon_erc",
  TG: "https://t.me/snowmoon_erc",
  CG: "https://www.coingecko.com/en/coins/snowmoon",
  NOVEL: "https://vitalik.eth.limo/snowmoon/",
  CHAPTER: (n) => `https://vitalik.eth.limo/snowmoon/html/chapter-${n}.html`,
};
(() => {
  const $ = (s, r = document) => r.querySelector(s),
    $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const touch = matchMedia("(hover: none), (pointer: coarse)").matches;
  const hasGSAP = !!(window.gsap && window.ScrollTrigger);
  const animOK = hasGSAP && !reduce;
  if (!animOK) document.body.classList.add("no-anim");

  /* links */
  const bind = (sel, url) =>
    $$(sel).forEach((a) =>
      url ? (a.href = url) : a.classList.add("disabled")
    );
  bind(".buy-link", CONFIG.BUY);
  bind(".gmgn-link", CONFIG.GMGN);
  bind(".chart-link", CONFIG.CHART);
  bind(".x-link", CONFIG.X);
  bind(".tg-link", CONFIG.TG);
  bind(".cg-link", CONFIG.CG);
  bind(".novel-link", CONFIG.NOVEL);
  $$(".ch-link").forEach((a) => (a.href = CONFIG.CHAPTER(a.dataset.ch)));
  $$(".ca-value").forEach((e) => (e.textContent = CONFIG.CA));

  /* copy + toast */
  const toast = $("#toast");
  let tt;
  const show = (m) => {
    toast.querySelector("span").textContent = m;
    toast.classList.add("show");
    clearTimeout(tt);
    tt = setTimeout(() => toast.classList.remove("show"), 2200);
  };
  async function copy(t) {
    try {
      await navigator.clipboard.writeText(t);
      return true;
    } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = t;
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (_) {}
      ta.remove();
      return ok;
    }
  }
  $$(".ca-copy").forEach((b) =>
    b.addEventListener("click", async () => {
      await copy(CONFIG.CA);
      window.__copied = CONFIG.CA;
      show("Contract address copied");
      const l = b.querySelector(".ca-btn"),
        o = l.innerHTML;
      l.innerHTML = '<svg><use href="#i-check"/></svg>Copied';
      setTimeout(() => (l.innerHTML = o), 1600);
    })
  );

  /* INTRO: frozen cover cracks & swings open */
  const intro = $("#intro");
  let opened = false,
    heroDone = false;
  function finishIntro() {
    intro.classList.add("gone");
    document.body.classList.remove("is-locked");
    window.__introDone = true;
    if (window.ScrollTrigger) ScrollTrigger.refresh();
    heroIn();
  }
  function openCodex() {
    if (opened) return;
    opened = true;
    if (!animOK) return finishIntro();
    const tl = gsap.timeline({ onComplete: finishIntro });
    tl.to(".cracks path", {
      strokeDashoffset: 0,
      duration: 0.55,
      stagger: 0.05,
      ease: "power2.in",
    })
      .to(
        ".seal",
        { scale: 1.08, opacity: 0, filter: "blur(8px)", duration: 0.45 },
        "-=.1"
      )
      .to(
        ".cover-l",
        { rotateY: -100, duration: 1.1, ease: "power3.inOut" },
        "<"
      )
      .to(
        ".cover-r",
        { rotateY: 100, duration: 1.1, ease: "power3.inOut" },
        "<"
      )
      .to(".cracks", { opacity: 0, duration: 0.4 }, "<")
      .to(intro, { opacity: 0, duration: 0.35 }, "-=.3");
  }
  $("#openCodex").addEventListener("click", openCodex);
  intro.addEventListener("click", (e) => {
    if (e.target === intro || e.target.closest(".cover")) openCodex();
  });
  if (!animOK) finishIntro();
  else setTimeout(openCodex, 2200);
  $("#replay").addEventListener("click", () => {
    if (!animOK) return;
    opened = false;
    gsap.set([".cover-l", ".cover-r"], { rotateY: 0 });
    gsap.set(".seal", { scale: 1, opacity: 1, filter: "none" });
    gsap.set(".cracks", { opacity: 1 });
    gsap.set(".cracks path", { strokeDashoffset: 1600 });
    gsap.set(intro, { opacity: 1 });
    intro.classList.remove("gone");
    document.body.classList.add("is-locked");
    setTimeout(openCodex, 1400);
  });
  function heroIn() {
    if (heroDone || !animOK) return;
    heroDone = true;
    gsap.from(".front-inner > *", {
      y: 40,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1.1,
      stagger: 0.1,
      ease: "power3.out",
    });
  }

  /* Lenis (desktop only) */
  let lenis = null;
  if (animOK && !touch && window.Lenis) {
    lenis = new Lenis({ lerp: 0.09 });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach((a) =>
      a.addEventListener("click", (e) => {
        const t = $(a.getAttribute("href"));
        if (t) {
          e.preventDefault();
          lenis.scrollTo(t, { offset: 0 });
        }
      })
    );
  }

  /* topbar */
  const bar = $(".topbar");
  const onScroll = () => bar.classList.toggle("solid", scrollY > 40);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* moon-phase rail: each section is a phase; active waxes */
  const rail = $$(".phase-rail a");
  rail.forEach((a, i) =>
    a
      .querySelector("i")
      .style.setProperty(
        "--ph",
        (-100 + (i / (rail.length - 1)) * 200).toFixed(0)
      )
  );
  const secs = rail.map((a) => $(a.getAttribute("href")));
  const so = new IntersectionObserver(
    (en) =>
      en.forEach((e) => {
        if (e.isIntersecting) {
          const i = secs.indexOf(e.target);
          rail.forEach((a, j) => a.classList.toggle("on", j === i));
        }
      }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  secs.forEach((s) => s && so.observe(s));

  /* author parallax */
  const stage = $(".author-stage");
  if (stage && animOK) {
    gsap.fromTo(
      ".author-cut",
      { yPercent: 8 },
      {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: stage,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".author-moon",
      { yPercent: -10 },
      {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: stage,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".author-banner img",
      { scale: 1.12 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".author-banner",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
    if (!touch)
      stage.addEventListener("pointermove", (e) => {
        const r = stage.getBoundingClientRect(),
          dx = (e.clientX - r.left) / r.width - 0.5,
          dy = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(".author-cut", {
          x: dx * 16,
          rotateY: dx * 6,
          rotateX: -dy * 4,
          duration: 0.6,
        });
      });
  }

  /* diptych */
  const dip = $(".diptych");
  const SIDES = {
    veridia: {
      n: "VERIDIA",
      t: "Privacy, built into the streets.",
      b: "In Meldan, watches run zero-knowledge checks, Emerald runs locally on your own device, and a decentralized Order of Steering sets taxes and subsidies through Keepers and Sentinels.",
      m: "Proof without exposure.",
    },
    arctic: {
      n: "ARCTIC EMPIRE",
      t: "Drones over the border.",
      b: "Its drone flights ground planes in Redshire. Then, in Mistime 3724, its forces take Northglade while Lord Ephelion, its consul to Veridia, is in the city.",
      m: "Every wall waits for a thaw.",
    },
  };
  $$(".leaf").forEach((l) =>
    l.addEventListener("click", () => {
      const s = l.dataset.pick,
        d = SIDES[s];
      dip.dataset.side = s;
      $$(".leaf").forEach((x) => x.setAttribute("aria-pressed", x === l));
      const set = () => {
        $("#vName").textContent = d.n;
        $("#vTitle").textContent = d.t;
        $("#vBody").textContent = d.b;
        $("#vMotto").textContent = d.m;
      };
      if (animOK)
        gsap
          .timeline()
          .to(".verdict > *", {
            opacity: 0,
            y: -8,
            duration: 0.2,
            stagger: 0.03,
          })
          .add(set)
          .to(".verdict > *", {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.05,
          });
      else set();
    })
  );

  /* chart (lazy) */
  const chart = $("#chart");
  new IntersectionObserver(
    (en, ob) => {
      if (!en[0].isIntersecting) return;
      ob.disconnect();
      chart.innerHTML = `<iframe title="SNOWMOON chart on DEX Screener" loading="lazy" src="https://dexscreener.com/${CONFIG.CHAIN}/${CONFIG.PAIR}?embed=1&theme=dark&trades=0&info=0"></iframe>`;
    },
    { rootMargin: "600px" }
  ).observe(chart);

  /* VIEWER: open a thawed print instead of downloading it */
  const viewer = $("#viewer"),
    viewerImg = viewer.querySelector("img"),
    viewerCap = $("#viewer-cap");
  let viewReturn = null;
  function openView(src, alt, title) {
    viewReturn = document.activeElement;
    viewerImg.src = src;
    viewerImg.alt = alt;
    viewerCap.textContent = title;
    viewer.hidden = false;
    document.body.classList.add("viewing");
    if (lenis) lenis.stop();
    viewer.querySelector(".viewer-close").focus();
  }
  function closeView() {
    if (viewer.hidden) return;
    viewer.hidden = true;
    viewerImg.removeAttribute("src");
    document.body.classList.remove("viewing");
    if (lenis) lenis.start();
    if (viewReturn) viewReturn.focus();
  }
  $$(".view-btn").forEach((b) =>
    b.addEventListener("click", () => {
      const fig = b.closest(".polaroid"),
        img = fig.querySelector(".ice img");
      openView(
        img.currentSrc || img.src,
        img.alt,
        fig.querySelector("b").textContent
      );
    })
  );
  viewer.addEventListener("click", (e) => {
    if (e.target === viewer) closeView();
  });
  viewer.querySelector(".viewer-close").addEventListener("click", closeView);
  addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeView();
  });

  /* GALLERY: frozen polaroids — rime canvas you wipe away by breath/pointer */
  $$(".polaroid").forEach((p) => {
    const c = p.querySelector(".rime"),
      x = c.getContext("2d");
    let w,
      h,
      wiped = 0,
      done = false;
    function paint() {
      const r = c.getBoundingClientRect();
      if (!r.width) return;
      const dpr = Math.min(devicePixelRatio, 2);
      w = c.width = r.width * dpr;
      h = c.height = r.height * dpr;
      const g = x.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, "rgba(235,246,255,.94)");
      g.addColorStop(1, "rgba(190,215,245,.9)");
      x.fillStyle = g;
      x.fillRect(0, 0, w, h);
      x.strokeStyle = "rgba(255,255,255,.85)";
      x.lineWidth = dpr;
      for (let i = 0; i < 26; i++) {
        // frost ferns
        let px = Math.random() * w,
          py = Math.random() * h,
          a = Math.random() * 6.28;
        x.beginPath();
        x.moveTo(px, py);
        for (let k = 0; k < 7; k++) {
          a += (Math.random() - 0.5) * 1.2;
          const l = (8 + Math.random() * 22) * dpr;
          const nx = px + Math.cos(a) * l,
            ny = py + Math.sin(a) * l;
          x.lineTo(nx, ny);
          x.moveTo(nx, ny);
          x.lineTo(
            nx + Math.cos(a + 1) * l * 0.5,
            ny + Math.sin(a + 1) * l * 0.5
          );
          x.moveTo(nx, ny);
          px = nx;
          py = ny;
        }
        x.stroke();
      }
      x.fillStyle = "rgba(90,110,170,.55)";
      x.font = `700 ${13 * dpr}px Cinzel, serif`;
      x.textAlign = "center";
      x.fillText(touch ? "TAP TO THAW" : "BREATHE TO THAW", w / 2, h / 2);
    }
    const thaw = () => {
      if (done) return;
      done = true;
      p.classList.add("thawed");
    };
    function wipe(e) {
      if (done) return;
      const r = c.getBoundingClientRect(),
        s = w / r.width,
        cx = (e.clientX - r.left) * s,
        cy = (e.clientY - r.top) * s,
        rad = 42 * s;
      x.globalCompositeOperation = "destination-out";
      const g = x.createRadialGradient(cx, cy, 0, cx, cy, rad);
      g.addColorStop(0, "rgba(0,0,0,.9)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      x.fillStyle = g;
      x.beginPath();
      x.arc(cx, cy, rad, 0, 6.28);
      x.fill();
      x.globalCompositeOperation = "source-over";
      if (++wiped > 38) thaw();
    }
    c.addEventListener("pointermove", wipe);
    c.addEventListener("click", thaw);
    if (document.fonts) document.fonts.ready.then(paint);
    else paint();
    new ResizeObserver(() => {
      if (!done) {
        wiped = 0;
        paint();
      }
    }).observe(c);
  });

  /* SNOW: 3 depth layers, cursor wind */
  const cv = $("#snow"),
    ctx = cv.getContext("2d");
  let W,
    H,
    flakes = [],
    mx = 0.5,
    wind = 0,
    running = true;
  function size() {
    const d = Math.min(devicePixelRatio, 1.5);
    W = cv.width = innerWidth * d;
    H = cv.height = innerHeight * d;
    const n = reduce
      ? 0
      : Math.round(Math.min(innerWidth, 1600) / (touch ? 9 : 6));
    flakes = Array.from({ length: n }, () => {
      const z = Math.random();
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        z,
        r: (0.6 + z * 2.6) * d,
        v: (0.3 + z * 1.4) * d,
        o: Math.random() * 6.28,
      };
    });
  }
  size();
  addEventListener("resize", size);
  addEventListener(
    "pointermove",
    (e) => {
      mx = e.clientX / innerWidth;
    },
    { passive: true }
  );
  function frame() {
    if (!running) return;
    wind += ((mx - 0.5) * 2.2 - wind) * 0.03;
    ctx.clearRect(0, 0, W, H);
    for (const f of flakes) {
      f.o += 0.01;
      f.y += f.v;
      f.x += Math.sin(f.o) * 0.4 + wind * (0.3 + f.z);
      if (f.y > H + 5) {
        f.y = -5;
        f.x = Math.random() * W;
      }
      if (f.x > W + 5) f.x = -5;
      if (f.x < -5) f.x = W + 5;
      ctx.globalAlpha = 0.25 + f.z * 0.65;
      ctx.fillStyle = f.z > 0.8 ? "#ffffff" : "#d4e8ff";
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, 6.28);
      ctx.fill();
    }
    requestAnimationFrame(frame);
  }
  if (!reduce) requestAnimationFrame(frame);
  document.addEventListener("visibilitychange", () => {
    const vis = !document.hidden;
    document.body.classList.toggle("paused", !vis);
    if (vis && !running && !reduce) {
      running = true;
      requestAnimationFrame(frame);
    } else if (!vis) running = false;
  });
  // pause the runes marquee off-screen
  const runes = $(".runes");
  if (runes)
    new IntersectionObserver(
      (en) =>
        (runes.querySelector(".runes-track").style.animationPlayState = en[0]
          .isIntersecting
          ? "running"
          : "paused")
    ).observe(runes);

  /* SCROLL SCENES */
  if (animOK) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".front-bg video", {
      yPercent: 12,
      scale: 1.08,
      ease: "none",
      scrollTrigger: {
        trigger: ".front",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    $$(".reveal").forEach((el) =>
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      })
    );
    $$(".count").forEach((el) => {
      const to = +el.dataset.to,
        pad = +el.dataset.pad || 0,
        o = { v: 0 };
      gsap.to(o, {
        v: to,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
        onUpdate: () =>
          (el.textContent = String(Math.round(o.v)).padStart(pad, "0")),
      });
    });
    // polaroids drop in like frozen prints
    gsap.from(".polaroid", {
      y: 120,
      rotate: (i) => (i % 2 ? 18 : -18),
      opacity: 0,
      duration: 1.1,
      stagger: 0.08,
      ease: "back.out(1.4)",
      clearProps: "transform,opacity",
      scrollTrigger: { trigger: ".thaw-grid", start: "top 85%" },
    });
    gsap.from(".epi-t > *", {
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      scrollTrigger: { trigger: ".epilogue", start: "top 70%" },
    });
    ScrollTrigger.matchMedia({
      "(min-width: 861px)": () => {
        const track = $(".chap-track"),
          pages = $$(".page");
        const dist = () => track.scrollWidth - innerWidth;
        const tw = gsap.to(track, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: ".chap-pin",
            start: "center center",
            end: () => "+=" + dist(),
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
        pages.forEach((pg) =>
          gsap.fromTo(
            pg,
            { rotateY: 28, opacity: 0.4 },
            {
              rotateY: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: pg,
                containerAnimation: tw,
                start: "left right",
                end: "center center",
                scrub: true,
              },
            }
          )
        );
      },
    });
    addEventListener("load", () => ScrollTrigger.refresh());
  }
})();
