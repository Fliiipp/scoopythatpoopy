// notification.js
// Handles the rotating top-of-page marketing banner.

import { $, showBanner } from "./uiHelpers.js";

export function initNotification() {
  const messageEl = $("#message");
  const notification = $("#notification");

  if (!messageEl || !notification) return;

  // Edge case: If JS elsewhere wants to surface a message programmatically,
  // we expose this tiny bridge on window. Totally optional.
  window.siteBanner = showBanner;

  // Respect prefers-reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    messageEl.textContent = "If they poop, we scoop!";
    notification.classList.add("show");
    return;
  }

  const messages = [
    "Too much dog 💩?",
    "If they poop, we scoop!",
  ];

  let index = 0;
  messageEl.textContent = messages[index];
  notification.classList.add("show");

  setInterval(() => {
    notification.classList.remove("show");

    setTimeout(() => {
      index = (index + 1) % messages.length;
      messageEl.textContent = messages[index];
      notification.classList.add("show");
    }, 500);
  }, 4000);
}
