// formSubmit.js
// Handles contact form validation + submission to Google Apps Script backend.

import { $, showBanner, postJSON } from "./uiHelpers.js";

const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbz7W5F733twrOetLkZ8ppHcxI3E3VbbfOBpcPOK79IVtkYxsvwiV3WklAXzZzZCZl2u/exec";

export function initFormSubmit() {
  const formWrapper = $("#form");
  if (!formWrapper) return;

  const formEl = formWrapper.querySelector("form") || formWrapper; // fallback
  const submitBtn = formWrapper.querySelector("button[type='submit']");

  formEl.addEventListener("submit", async e => {
    e.preventDefault();

    const data = {
      firstName: $("#fname")?.value.trim(),
      lastName: $("#lname")?.value.trim(),
      email: $("#email")?.value.trim(),
      phone: $("#phone")?.value.replace(/\D/g, ""),
      streetline: $("#streetLine")?.value.trim() || "",
      postal: $("#postal")?.value.trim(),
      dogs: $("#quoteList")?.value || "",
      recurring: $("#recurring")?.checked ? "yes" : "no",
      message: $("#user-message")?.value.trim() || ""
    };


    // basic validation
    if (!data.firstName || !data.lastName) {
      showBanner("⚠️ Please enter your full name.", "error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      showBanner("⚠️ Please enter a valid email address.", "error");
      return;
    }

    if (data.phone.length !== 10) {
      showBanner("⚠️ Phone number must be 10 digits.", "error");
      return;
    }

    if (!/^\d{5}$/.test(data.postal)) {
      showBanner("⚠️ Postal code must be 5 digits.", "error");
      return;
    }

    // Send
    try {
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
      }

      const response = await postJSON(ENDPOINT, data);

      if (response.ok) {
        showBanner("✅ Thank you! Your info has been saved.", "success");
        formEl.reset();
      } else {
        showBanner("❌ Error: Could not submit form.", "error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      showBanner("❌ Network error. Please try again later.", "error");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit";
      }
    }
  });
}
