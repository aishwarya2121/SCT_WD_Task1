// Get stored data or initialize
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let likedItems = JSON.parse(localStorage.getItem("likes")) || [];
let messages = JSON.parse(localStorage.getItem("messages")) || [];

// Update counts in existing icons
function updateIcons() {
  // Select your existing icons
  const cartIcon = document.querySelector(".icons .fa-shopping-cart");
  const heartIcon = document.querySelector(".icons .fa-heart");

  // Add count as small badges
  if (cartIcon) {
    cartIcon.setAttribute("data-count", cartItems.length);
  }

  if (heartIcon) {
    heartIcon.setAttribute("data-count", likedItems.length);
  }
}

// Handle Add to Cart buttons
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("cart-btn")) {
    const box = event.target.closest(".box");
    const name = box.querySelector("h3").textContent;
    const price = box.querySelector(".price").textContent;

    cartItems.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cartItems));
    updateIcons();
    alert("✅ Added to cart: " + name);
  }
});

// Handle Like (Heart) buttons inside products
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("fa-heart") && event.target.closest(".box")) {
    const box = event.target.closest(".box");
    const name = box.querySelector("h3").textContent;

    if (!likedItems.some(item => item.name === name)) {
      likedItems.push({ name });
      localStorage.setItem("likes", JSON.stringify(likedItems));
      updateIcons();
      alert("❤️ Liked: " + name);
    } else {
      alert("Already liked: " + name);
    }
  }
});

// Handle contact form submission
document.addEventListener("DOMContentLoaded", function () {
  updateIcons(); // Load saved counts on page load

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.querySelector('input[placeholder="Name"]').value;
      const email = form.querySelector('input[placeholder="Email"]').value;
      const number = form.querySelector('input[placeholder="Number"]').value;
      const msg = form.querySelector('textarea[placeholder="Message"]').value;

      messages.push({ name, email, number, msg });
      localStorage.setItem("messages", JSON.stringify(messages));

      form.reset();
      alert("📩 Thank you for contacting us, " + name + "!");
    });
  }
});

