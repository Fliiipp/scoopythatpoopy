// Begin Price List Script
document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("rateList");
  const priceArticle = document.getElementById("price-article");

  // Hide at first
  priceArticle.style.display = "none";

  // Pricing data
  const prices = {
    one: {
      initial: "$40-$50",
      week: "$15",
      bi: "$21",
      month: "$40+"
    },
    twotothree: {
      initial: "$70-$100",
      week: "$17-$20",
      bi: "$26-$30",
      month: "$45+"
    },
    fourplus: {
      initial: "$100-$150",
      week: "$25+",
      bi: "$35",
      month: "$50+"
    }
  };

selector.addEventListener("change", () => {
    const selected = prices[selector.value];

    if (selected) {
        // Show the price article
        priceArticle.style.display = "grid";

        // Update values
        document.getElementById("initial").textContent = selected.initial;
        document.getElementById("week").textContent = selected.week;
        document.getElementById("bi").textContent = selected.bi;
        document.getElementById("month").textContent = selected.month;
    } else {
    // Hide if nothing valid is selected
    priceArticle.style.display = "none";
    }
  });
});

// End Price List Script Start Notification Script
const messages = [
    "📢 2 weeks FREE when you sign up for our MONTHLY recurring services!",
    "If they poop, we scoop!"
];

let index = 0;
const messageEl = document.getElementById("message");

function showNextMessage() {
    // Fade out
    messageEl.classList.remove("show");
    messageEl.classList.add("fade");

    setTimeout(() => {
    // Change text
    index = (index + 1) % messages.length;
    messageEl.textContent = messages[index];

    // Fade in
    messageEl.classList.remove("fade");
    messageEl.classList.add("show");
    }, 500); // match transition duration
}

// Start cycling every 4 seconds
setInterval(showNextMessage, 4000);

// End Notification Script Start Phone Script
document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("phone");

  phoneInput.addEventListener("input", (e) => {
    // Remove non-digits
    let input = e.target.value.replace(/\D/g, "");

    // Limit to 10 digits
    input = input.substring(0, 10);

    // Format: (123) 456-7890
    let formatted = "";
    if (input.length > 0) {
      formatted = "(" + input.substring(0, 3);
    }
    if (input.length >= 4) {
      formatted += ") " + input.substring(3, 6);
    }
    if (input.length >= 7) {
      formatted += "-" + input.substring(6, 10);
    }

    e.target.value = formatted;
  });
});

// End Phone Script Start Form Submit
document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Collect values
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.replace(/\D/g, ""); // digits only
  const postal = document.getElementById("postal").value.trim();
  const message = document.getElementById("formMessage").value.trim();

  // Validation
  if (!firstName || !lastName) {
    alert("⚠️ Please enter your full name.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }

  if (phone.length !== 10) {
    alert("⚠️ Phone number must be 10 digits.");
    return;
  }

  const postalPattern = /^\d{5}$/;
  if (!postalPattern.test(postal)) {
    alert("⚠️ Postal code must be 5 digits.");
    return;
  }

  // Build data object
  const data = {
    firstName,
    lastName,
    email,
    phone,
    postal,
    message
  };

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbw_yacaToQfkpH6x9mljIFAW-Yv5XiNrpUPWg9hls6_qs58ydDPTYdXOB-vJfVB40hx/exec", {
      method: "POST",
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
