// Product data
const product = {
  name: "Wireless Headphones",
  description: "High-quality wireless headphones with noise cancellation.",
  price: 150,
  discountPercent: 30,
  discountEndsInSeconds: 300 // 5 minutes
};

// DOM Elements
const nameEl = document.getElementById("product-name");
const descEl = document.getElementById("product-description");
const originalPriceEl = document.getElementById("original-price");
const discountedPriceEl = document.getElementById("discounted-price");
const discountFlagEl = document.getElementById("discount-flag");
const countdownEl = document.getElementById("countdown");

// Calculate discounted price
function calculateDiscount(price, percent) {
  return price - (price * percent) / 100;
}

// Countdown timer
function startCountdown(seconds) {
  let remaining = seconds;

  const timer = setInterval(() => {
    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;

    countdownEl.textContent = `⏳ Discount ends in ${mins}:${secs
      .toString()
      .padStart(2, "0")}`;

    if (remaining <= 0) {
      clearInterval(timer);
      countdownEl.textContent = "❌ Discount expired";
      discountFlagEl.classList.add("hidden");
      originalPriceEl.textContent = "";
      discountedPriceEl.textContent = `$${product.price.toFixed(2)}`;
    }

    remaining--;
  }, 1000);
}

// Render product
function renderProduct(product) {
  nameEl.textContent = product.name;
  descEl.textContent = product.description;

  if (product.discountPercent > 0) {
    const discountedPrice = calculateDiscount(
      product.price,
      product.discountPercent
    );

    originalPriceEl.textContent = `$${product.price.toFixed(2)}`;
    discountedPriceEl.textContent = `$${discountedPrice.toFixed(2)}`;

    discountFlagEl.textContent = `-${product.discountPercent}%`;
    discountFlagEl.classList.remove("hidden");

    startCountdown(product.discountEndsInSeconds);
  } else {
    discountedPriceEl.textContent = `$${product.price.toFixed(2)}`;
  }
}

// Initialize
renderProduct(product);