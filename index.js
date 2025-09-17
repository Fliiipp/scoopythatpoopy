// Begin Price List Script
document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("rateList");

  const prices = {
    one: { initial: "$40-$50", week: "$15", bi: "$21", month: "$40+" },
    twotothree: { initial: "$70-$100", week: "$17-$20", bi: "$26-$30", month: "$45+" },
    fourplus: { initial: "$100-$150", week: "$25+", bi: "$35", month: "$50+" }
  };

  function togglePriceArticle(show, values = {}) {
    const priceArticle = document.getElementById("price-article");
    priceArticle.style.display = show ? "grid" : "none";

    if (show) {
      document.getElementById("initial").textContent = values.initial;
      document.getElementById("week").textContent = values.week;
      document.getElementById("bi").textContent = values.bi;
      document.getElementById("month").textContent = values.month;
    }
  }

  selector.addEventListener("change", () => {
    const selected = prices[selector.value];
    togglePriceArticle(!!selected, selected);
  });
});
// End Price List Script

// Start Notification Script
const messages = [
  "📢 2 weeks FREE when you sign up for our MONTHLY recurring services!",
  "If they poop, we scoop!"
];
let index = 0;
const messageEl = document.getElementById("message");

// Show initial message
messageEl.textContent = messages[0];
document.getElementById("notification").classList.add("show");

function showNextMessage() {
  document.getElementById("notification").classList.remove("show");
  setTimeout(() => {
    index = (index + 1) % messages.length;
    messageEl.textContent = messages[index];
    document.getElementById("notification").classList.add("show");
  }, 500);
}
setInterval(showNextMessage, 4000);
// End Notification Script

// Start Phone Script
document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("phone");

  phoneInput.addEventListener("input", (e) => {
    let input = e.target.value.replace(/\D/g, "").substring(0, 10);
    let formatted = "";
    if (input.length > 0) formatted = "(" + input.substring(0, 3);
    if (input.length >= 4) formatted += ") " + input.substring(3, 6);
    if (input.length >= 7) formatted += "-" + input.substring(6, 10);
    e.target.value = formatted;
  });
});
// End Phone Script

// Start Form Submit
document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.replace(/\D/g, "");
  const postal = document.getElementById("postal").value.trim();
  const message = document.getElementById("formMessage").value.trim();

  if (!firstName || !lastName) return alert("⚠️ Please enter your full name.");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) return alert("⚠️ Please enter a valid email address.");

  if (phone.length !== 10) return alert("⚠️ Phone number must be 10 digits.");

  const postalPattern = /^\d{5}$/;
  if (!postalPattern.test(postal)) return alert("⚠️ Postal code must be 5 digits.");

  const data = { firstName, lastName, email, phone, postal, message };

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzzgpT3_MfavKaKyVz_iJdLW-tIKtenpeA1gEibT1ObQIMU9P1TkC8uj6IgW_imhbIB/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("✅ Thank you! Your info has been saved.");
      e.target.reset();
    } else {
      alert("❌ Error: Could not submit form.");
    }
  } catch (err) {
    console.error(err);
    alert("❌ Network error. Please try again later.");
  }
});
// End Form Submit
