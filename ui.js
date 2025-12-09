// ui.js
import { addToCart, updateCartUI } from "./cart.js";

export function displayProducts(list) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    if (!list?.length) {
        grid.innerHTML = `<div class="no-products">No products found</div>`;
        return;
    }

    grid.innerHTML = list.map(p => {
        const price = p.price;
        const oldPrice = price + Math.floor(price * 0.15);

        return `
            <div class="card" data-product="1">
                <img src="${p.image}" class="main-img">
                <div class="card-title">${p.name}</div>
                <div class="card-subtitle">${p.subtitle}</div>

                <div class="price-box">
                    <span class="old-price">₹${oldPrice.toLocaleString()}</span>
                    <span>₹${price.toLocaleString()}</span>
                </div>
            </div>
        `;
    }).join("");

    // 👇 when user clicks the card, add to cart
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            addToCart();
            updateCartUI();
        });
    });
}
