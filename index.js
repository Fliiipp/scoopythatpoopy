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
    let value = e.target.value.replace(/\D/g, ""); // remove all non-digits

    if (value.length > 10) {
      value = value.slice(0, 10); // limit to 10 digits
    }

    let formatted = value;

    if (value.length > 6) {
      formatted = `(${value.slice(0,3)}) ${value.slice(3,6)}-${value.slice(6)}`;
    } else if (value.length > 3) {
      formatted = `(${value.slice(0,3)}) ${value.slice(3)}`;
    } else if (value.length > 0) {
      formatted = `(${value}`;
    }

    e.target.value = formatted;
  });
});

//Submit Script
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact");
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const data = {
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      postal: document.getElementById("postal").value,
      dogNum: document.getElementById("quoteList").value,
      recurring: document.getElementById("recurring").checked ? "yes" : "no",
      message: document.getElementById("message").value
    };

    fetch("https://script.google.com/macros/s/AKfycbwglSYI_QIoVrfvbO-2SCB7ArjChbJ9BgsQ7cXZDhQqG7NYMi8XOpEE3Uy5FMiGKJos/exec", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
    .then(res => res.json())
    .then(res => {
      if (res.result === "success") {
        alert("✅ Form submitted! Your response has been recorded.");
        form.reset();
      } else {
        alert("⚠️ Error: " + res.message);
      }
    })
    .catch(err => alert("❌ Submission failed: " + err));
  });
});
