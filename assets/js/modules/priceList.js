// priceList.js
// Shows dynamic pricing details when the user picks a yard size / dog count.

import { $, $$ } from "./uiHelpers.js";

const PRICES = {
  oneTwo: {
    initial: "$35+",
    week: "$17-$20",
    bi: "$35-$38",
    month: "$60",
    oneTime: "$55",
  },
  threeMore: {
    initial: "$35+",
    week: "$20-$23",
    bi: "$38-$41",
    month: "$75",
    oneTime: "$55",
  },
};

export function initPriceList() {
  const selector = $("#rateList");
  if (!selector) return;

  const priceArticle = $("#cost");
  if (!priceArticle) return;

  selector.addEventListener("change", () => {
  const selected = PRICES[selector.value];
  const priceArticle = document.querySelector("#cost");
  if (!priceArticle) return;

  if (selected) {
    // show the pricing box
    priceArticle.classList.remove("hidden");
    priceArticle.style.display = "grid";
    priceArticle.style.opacity = "1";

    // update prices
    Object.entries(selected).forEach(([key, value]) => {
      const el = document.querySelector(`#${key}`);
      if (el) el.textContent = value;
    });
  } else {
    // hide the pricing box
    priceArticle.classList.add("hidden");
  }
});
}