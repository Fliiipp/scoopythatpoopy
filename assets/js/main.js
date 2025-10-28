// main.js
// Root initializer. Conditionally loads feature modules only if the page
// actually needs them. Helps keep pages lightweight and avoids errors.

import { injectSchemaData } from "./modules/schemaData.js";

// Simple safe dynamic import with caching
const moduleCache = {};
async function safeImport(path, callback) {
  try {
    if (!moduleCache[path]) {
      moduleCache[path] = await import(path);
    }
    callback?.(moduleCache[path]);
  } catch (err) {
    console.warn(`⚠️ Failed to load module: ${path}`, err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // --- Marketing / rotating banner ---
  if (document.querySelector("#notification")) {
    safeImport("./modules/notification.js", ({ initNotification }) => {
      initNotification();
    });
  }

  // --- Dynamic pricing (services page only) ---
  if (document.querySelector("#rateList")) {
    safeImport("./modules/priceList.js", ({ initPriceList }) => {
      initPriceList();
    });
  }

  // --- Live phone formatter ---
  if (document.querySelector("#phone")) {
    safeImport("./modules/phoneFormatter.js", ({ initPhoneFormatter }) => {
      initPhoneFormatter();
    });
  }

  // --- Contact form handler / submit to Apps Script ---
  if (document.querySelector("#info")) {
    safeImport("./modules/formSubmit.js", ({ initFormSubmit }) => {
      initFormSubmit();
    });
  }

  // --- Random dog images + responsive logo ---
  if (document.querySelector(".random-dog") || document.querySelector("#logo")) {
    safeImport("./modules/randomImages.js", ({ initRandomImages }) => {
      initRandomImages();
    });
  }

  // --- Inject business schema for SEO ---
  injectSchemaData();
});
