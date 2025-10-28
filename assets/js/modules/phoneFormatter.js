// phoneFormatter.js
// Formats US phone numbers live as the user types: (702) 555-1234

import { $ } from "./uiHelpers.js";

export function initPhoneFormatter() {
  const phoneInput = $("#phone");
  if (!phoneInput) return;

  const formatNumber = e => {
    const input = e.target;
    const prevPos = input.selectionStart;

    let digits = input.value.replace(/\D/g, "").substring(0, 10);

    let formatted = "";
    if (digits.length === 0) {
      formatted = "";
    } else if (digits.length < 4) {
      formatted = `(${digits}`;
    } else if (digits.length < 7) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }

    input.value = formatted;

    // naive caret restore (good enough for most cases)
    const newPos = Math.min(formatted.length, prevPos + (formatted.length - digits.length <= 0 ? 0 : 1));
    input.setSelectionRange(newPos, newPos);
  };

  phoneInput.addEventListener("input", formatNumber);

  phoneInput.addEventListener("paste", () => {
    setTimeout(() => phoneInput.dispatchEvent(new Event("input")), 0);
  });
}
