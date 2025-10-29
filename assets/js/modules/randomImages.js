// randomImages.js
// Randomly assigns pet images & alt text, and swaps header logo based on viewport.

import { $$, $ } from "./uiHelpers.js";

const imageFiles = [
  { name: "budSammy", ext: "jpg" },
  { name: "charlie", ext: "jpg" },
  { name: "jaxFrenchiepibbles", ext: "jpg" },
  { name: "jersey", ext: "jpg" },
  { name: "milo", ext: "jpg" },
  { name: "phoenixLucyPrudence", ext: "jpg" },
  { name: "sidPeanutBud", ext: "jpg" },
  { name: "skittles", ext: "jpg" },
  { name: "snips", ext: "jpg" },
  { name: "twinkie", ext: "jpg" },
  { name: "whiskey", ext: "jpg" },
];

const altDescriptions = {
  budSammy: "Bud and Sammy awaiting their food.",
  charlie: "Chillin' Charlie relaxing in bed.",
  jaxFrenchiepibbles: "Jax and Frenchie Pibbles enjoying some playtime.",
  jersey: "Jersey lying down on the porch.",
  milo: "Milo getting cleaned up.",
  phoenixLucyPrudence: "Phoenix, Lucy and Prudence awaiting a treat.",
  sidPeanutBud: "Sid, Peanut, and Bud lying in their beds.",
  skittles: "Skittles nodding off to sleep.",
  snips: "Snips enjoying a walk outside.",
  twinkie: "Twinkie sticking his tongue out.",
  whiskey: "Whiskey lounging around.",
};

// Convert "sidPeanutBud" -> "Sid Peanut Bud"
function formatAltText(baseName) {
  return baseName
    .replace(/([A-Z])/g, " $1")
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim();
}

function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

function pickSuffix(width) {
  if (width <= 600) return "M"; // mobile
  if (width <= 1024) return "T"; // tablet
  return "D"; // desktop
}

// randomize array shallowly
function shuffledCopy(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function updateHeaderImage() {
  const img = $("#logo");
  if (!img) return;
  const w = window.innerWidth;
  if (w >= 600) {
    img.src = "/assets/images/logos/logoT.png";
  } else {
    img.src = "/assets/images/logos/logoM.png";
  }
}

export function initRandomImages() {
  const randomImages = $$("img.random-dog");
  const hasRandoms = randomImages.length > 0;

  // assign dog images if present
  if (hasRandoms) {
    let suffix = pickSuffix(window.innerWidth);
    const shuffled = shuffledCopy(imageFiles);

    randomImages.forEach((img, index) => {
      const file = shuffled[index % shuffled.length];
      const imgPath = `/assets/images/dogs/${file.name}${suffix}.${file.ext}`;
      const altText =
        altDescriptions[file.name] || formatAltText(file.name);

      img.src = imgPath;
      img.alt = altText;
      img.title = altText;
    });

    window.addEventListener(
      "resize",
      debounce(() => {
        const newSuffix = pickSuffix(window.innerWidth);
        if (newSuffix === suffix) return;
        suffix = newSuffix;

        randomImages.forEach((img, index) => {
          const file = shuffled[index % shuffled.length];
          img.src = `/assets/images/dogs/${file.name}${suffix}.${file.ext}`;
        });
      }, 300)
    );
  }

  // responsive header logo
  updateHeaderImage();
  window.addEventListener(
    "resize",
    debounce(() => updateHeaderImage(), 150)
  );
}
