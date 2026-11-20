/**
 * Renders the landing page from window.SITE_CONFIG (see src/config.js).
 */
(function () {
  "use strict";

  const cfg = window.SITE_CONFIG;
  if (!cfg) {
    console.error("SITE_CONFIG missing: is src/config.js loaded before src/main.js?");
    return;
  }

  // ---------- helpers ----------
  const $ = (sel) => document.querySelector(sel);

  /** Escape text for safe insertion into HTML. */
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const discordReady = cfg.discordUrl && !cfg.discordUrl.includes("YOUR-INVITE-CODE");
  const discordHref = discordReady ? cfg.discordUrl : "#discord";
  const externalAttrs = discordReady ? ' target="_blank" rel="noopener"' : "";

  const DISCORD_ICON =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.6 1.3a18.3 18.3 0 0 0-5.5 0L8.6 3a19.7 19.7 0 0 0-4.9 1.5C.6 9.1-.3 13.7.1 18.2a19.9 19.9 0 0 0 6 3l1.3-2.1a12.9 12.9 0 0 1-2-1l.5-.4a14.2 14.2 0 0 0 12.2 0l.5.4c-.6.4-1.3.7-2 1l1.3 2.1a19.8 19.8 0 0 0 6-3c.5-5.2-.9-9.8-3.6-13.8ZM8 15.5c-1.2 0-2.2-1.1-2.2-2.4S6.8 10.6 8 10.6s2.2 1.1 2.2 2.5-1 2.4-2.2 2.4Zm8 0c-1.2 0-2.2-1.1-2.2-2.4s1-2.5 2.2-2.5 2.2 1.1 2.2 2.5-1 2.4-2.2 2.4Z"/></svg>';

  const discordButton = (label, extraClass = "") =>
    `<a class="btn btn-discord ${extraClass}" href="${esc(discordHref)}"${externalAttrs}>${DISCORD_ICON}${esc(label)}</a>`;

  // ---------- sections ----------
  function renderMeta() {
    const { event } = cfg;
    document.title = `${event.name} · UIUC`;
    $("#logo").innerHTML = esc(event.shortName).replace("/", "<span>/</span>");
    $("#nav-discord").href = discordHref;
    if (discordReady) Object.assign($("#nav-discord"), { target: "_blank", rel: "noopener" });
  }

  function renderHero() {
    const { event } = cfg;
    const register = cfg.registerUrl
      ? `<a class="btn btn-ghost" href="${esc(cfg.registerUrl)}" target="_blank" rel="noopener">Register</a>`
      : `<a class="btn btn-ghost" href="#about">Learn more</a>`;

    $("#hero-content").innerHTML = `
      <span class="tag mono">// ${esc(event.dates)} · ${esc(event.city)}</span>
      <h1>${esc(event.headline[0])} <span class="accent">${esc(event.headline[1])}</span></h1>
      <p class="lede">${esc(event.tagline)}</p>
      <div class="meta">
        <div><small>When</small><b>${esc(event.dates)}</b></div>
        <div><small>Where</small><b>${esc(event.location)}</b></div>
        <div><small>Cost</small><b>${esc(event.cost)}</b></div>
      </div>
      <div class="cta-row">${discordButton("Join the Discord")}${register}</div>`;
  }

  function renderAbout() {
    const { about } = cfg;
    $("#about-title").textContent = about.title;
    $("#about-body").textContent = about.body;
    $("#about-features").innerHTML = about.features
      .map((f) => `<div class="card"><div class="icon">${esc(f.icon)}</div><h3>${esc(f.title)}</h3><p>${esc(f.text)}</p></div>`)
      .join("");
    $("#about-stats").innerHTML = about.stats
      .map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`)
      .join("");
  }

  function renderTracks() {
    $("#tracks-grid").innerHTML = cfg.tracks
      .map(
        (t, i) =>
          `<div class="card"><div class="icon">${String(i + 1).padStart(2, "0")}</div><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></div>`
      )
      .join("");
  }

  function renderSchedule() {
    $("#schedule-grid").innerHTML = cfg.schedule
      .map(
        (d) => `
        <div class="day">
          <h3>${esc(d.day)}</h3>
          ${d.items.map(([t, what]) => `<div class="slot"><time>${esc(t)}</time><span>${esc(what)}</span></div>`).join("")}
        </div>`
      )
      .join("");
    $("#schedule-note").textContent = cfg.scheduleNote || "";
  }

  function renderFaq() {
    $("#faq-list").innerHTML = cfg.faq
      .map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`)
      .join("");
  }

  function renderDiscord() {
    $("#discord-cta").innerHTML = discordButton("Join the Discord");
  }

  function renderHosts() {
    $("#hosts-list").innerHTML = cfg.hosts
      .map((h) =>
        h.url
          ? `<a class="host" href="${esc(h.url)}" target="_blank" rel="noopener">${esc(h.name)}</a>`
          : `<div class="host">${esc(h.name)}</div>`
      )
      .join("");
  }

  function renderFooter() {
    const { event } = cfg;
    $("#footer-text").textContent = `© ${event.year} ${event.name} · University of Illinois Urbana-Champaign`;
    const link = $("#footer-discord");
    link.href = discordHref;
    if (discordReady) Object.assign(link, { target: "_blank", rel: "noopener" });
  }

  [renderMeta, renderHero, renderAbout, renderTracks, renderSchedule, renderFaq, renderDiscord, renderHosts, renderFooter].forEach(
    (fn) => fn()
  );
})();
