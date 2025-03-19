// Change navbar background on scroll
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
// Cart Data
let cart = [];
let totalPrice = 0;

// Select Elements
const cartIcon = document.getElementById("cart-icon");
const cartCount = document.getElementById("cart-count");
const cartPopup = document.getElementById("cart-popup");
const cartItems = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const orderNowButton = document.getElementById("order-now");

// Function to Add Item to Cart
function addToCart(name, price) {
    cart.push({ name, price });
    totalPrice += price;
    
    // Update Cart Count
    cartCount.textContent = cart.length;
    cartCount.style.display = "block";

    alert(`${name} added to cart!`);
}

// Show Cart Popup
cartIcon.addEventListener("click", () => {
    cartItems.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
    });

    totalPriceElement.textContent = totalPrice;
    cartPopup.style.display = "block";
});

// Hide Cart on Clicking Outside
document.addEventListener("click", (e) => {
    if (!cartPopup.contains(e.target) && e.target !== cartIcon) {
        cartPopup.style.display = "none";
    }
});

// Order Now Button Click
orderNowButton.addEventListener("click", () => {
    if (cart.length > 0) {
        alert("Your order has been placed!");
        cart = [];
        totalPrice = 0;
        cartCount.style.display = "none";
        cartPopup.style.display = "none";
    } else {
        alert("Your cart is empty!");
    }
});

// Modify Buy Now Buttons to Work with Cart
document.querySelectorAll(".buy-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let bouquetNames = ["Rose Delight", "Sunshine Bliss", "Lilac Love", "Tulip Charm", "Daisy Dreams", "Orchid Elegance"];
        let bouquetPrices = [1499, 1299, 1699, 1899, 1199, 2499];

        addToCart(bouquetNames[index], bouquetPrices[index]);
    });
});
