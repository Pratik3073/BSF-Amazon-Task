// ui.js
import { addToCart, updateCartUI } from "./cart.js";

export function displayProducts(list) {
    const grid = document.getElementById("productGrid");
    if (!grid) return; // prevents crash if element missing

    grid.innerHTML = "";

    // If list is empty OR undefined
    if (!list?.length) {
        grid.innerHTML = `<div class="no-products">No products found</div>`;
        return;
    }

    grid.innerHTML = list
        ?.map(p => {
            const price = p?.price ?? 0;
            const oldPrice = price + Math.floor(price * 0.15);

            return `
                <div class="card" data-product="1">
                    <img src="${p?.image ?? ''}" class="main-img" alt="product">

                    <div class="card-title">${p?.name ?? "Unknown Product"}</div>
                    <div class="card-subtitle">${p?.subtitle ?? ""}</div>

                    <div class="price-box">
                        <span class="old-price">₹${oldPrice?.toLocaleString?.() ?? ""}</span>
                        <span>₹${price?.toLocaleString?.() ?? ""}</span>
                    </div>
                </div>
            `;
        })
        .join("");

    // Add click-to-cart event
    document.querySelectorAll(".card")?.forEach(card => {
        card?.addEventListener?.("click", () => {
            addToCart?.();
            updateCartUI?.();
        });
    });
}
