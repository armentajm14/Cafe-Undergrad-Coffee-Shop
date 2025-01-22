/ Toggle Mobile Menu
const navbar = document.querySelector('.navbar ul');
const toggleButton = document.querySelector('.menu-toggle');

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        if (navbar) {
            navbar.classList.toggle('active');
        } else {
            console.error("Navbar element not found!");
        }
    });
}

// Search Bar Placeholder Animation
const searchInput = document.querySelector(".search-form input[type='search']");
if (searchInput) {
    const placeholderText = "Search your dream guitar";
    let placeholderIndex = 0;

    function animatePlaceholder() {
        if (placeholderIndex < placeholderText.length) {
            searchInput.setAttribute("placeholder", placeholderText.slice(0, ++placeholderIndex));
            setTimeout(animatePlaceholder, 100); // Typing effect
        } else {
            placeholderIndex = 0;
            setTimeout(animatePlaceholder, 2000); // Restart after 2 seconds
        }
    }

    animatePlaceholder();
} else {
    console.error("Search input element not found!");
}

// Scroll-to-Top Button
const scrollToTopBtn = document.createElement("div");
scrollToTopBtn.innerHTML = "⬆";
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #ff9900;
    color: #121212;
    padding: 7px;
    border-radius: 100%;
    cursor: pointer;
    font-size: 1.5rem;
    display: none;
    z-index: 500;
`;
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Footer Form Validation
const form = document.querySelector(".footer form");
if (form) {
    const emailInput = form.querySelector("input[type='email']");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailValue = emailInput ? emailInput.value : "";

        if (!emailValue || !/\S+@\S+\.\S+/.test(emailValue)) {
            alert("Please enter a valid email address!");
        } else {
            alert("Thank you for subscribing!");
            if (emailInput) emailInput.value = ""; // Clear the input
        }
    });
} else {
    console.error("Footer form element not found!");
}

// Add to Cart Functionality
let cart = [];
const addToCartButton = document.querySelector('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

if (addToCartButton && cartItems && totalPriceElement) {
    addToCartButton.addEventListener('click', function () {
        const productNameElement = document.querySelector('.product h2');
        const productName = productNameElement ? productNameElement.textContent : "Unknown Product";
        const productPrice = 19.99; // Example price

        // Add product to cart
        const listItem = document.createElement('li');
        listItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
        cartItems.appendChild(listItem);

        // Update total price
        const currentTotal = parseFloat(totalPriceElement.textContent) || 0;
        const newTotal = currentTotal + productPrice;
        totalPriceElement.textContent = newTotal.toFixed(2);

        // Add to cart array for debugging/logging
        cart.push({ productName, productPrice });
        alert(`${productName} has been added to your cart!`);
        console.log(cart);
    });
} else {
    console.error("Cart elements or Add-to-Cart button not found!");
}
