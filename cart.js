// cart.js

let cartCount = Number(localStorage.getItem("cartCount")) || 0;

export function getCartCount() {
    return cartCount;
}

export function addToCart() {
    cartCount++;
    localStorage.setItem("cartCount", cartCount);
}

export function updateCartUI() {
    document.getElementById("cartCount").innerText = cartCount;
}
