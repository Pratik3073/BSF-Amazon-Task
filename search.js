// search.js
import { products } from "./products.js";
import { displayProducts } from "./ui.js";

export function setupSearch() {
    const input = document.getElementById("searchInput");
    const btn = document.getElementById("searchBtn");

    function searchProducts() {
        const q = input.value.toLowerCase();
        const result = products.filter(p => p?.name?.toLowerCase()?.includes(q));
        displayProducts(result);
    }

    input.addEventListener("input", searchProducts);
    btn.addEventListener("click", searchProducts);
}
