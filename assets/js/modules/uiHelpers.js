// uiHelpers.js
// Common utility helpers used across modules.

/**
 * Shorthand DOM query helpers
 */
export const $ = selector => document.querySelector(selector);
export const $$ = selector => document.querySelectorAll(selector);

/**
 * Create or reuse a top-of-page notification banner.
 * type: "info" | "success" | "error"
 */
export function showBanner(message, type = "info") {
  let banner = $("#global-banner");

  if (!banner) {
    banner = document.createElement("div");
    banner.id = "global-banner";
    banner.setAttribute("role", "status");
    banner.setAttribute("aria-live", "polite");

    banner.style.position = "fixed";
    banner.style.top = "0";
    banner.style.left = "0";
    banner.style.width = "100%";
    banner.style.padding = "10px 16px";
    banner.style.fontSize = "1rem";
    banner.style.fontWeight = "bold";
    banner.style.textAlign = "center";
    banner.style.boxShadow = "0px 4px 8px rgba(0,0,0,0.25)";
    banner.style.transform = "translateY(-100%)";
    banner.style.transition = "transform 0.3s ease, opacity 0.3s ease";
    banner.style.zIndex = "2000";

    document.body.appendChild(banner);
  }

  // style variants
  const palette = {
    info:   { bg: "rgb(230, 134, 27)", fg: "rgb(20, 49, 39)" },
    success:{ bg: "rgb(76, 175, 80)",  fg: "#fff" },
    error:  { bg: "rgb(200, 0, 0)",    fg: "#fff" }
  };

  const { bg, fg } = palette[type] || palette.info;
  banner.style.backgroundColor = bg;
  banner.style.color = fg;

  banner.textContent = message;
  banner.style.opacity = "1";
  requestAnimationFrame(() => {
    banner.style.transform = "translateY(0)";
  });

  // auto-hide
  clearTimeout(banner._hideTimer);
  banner._hideTimer = setTimeout(() => {
    banner.style.opacity = "0";
    banner.style.transform = "translateY(-100%)";
  }, 4000);
}

/**
 * Safe JSON POST helper
 */
export async function postJSON(url, data) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res;
}
