// filter.js
import { products } from "./products.js";
import { displayProducts } from "./ui.js";

export function setupPriceFilter() {
    const filters = document.querySelectorAll("input[name='price']");

    filters.forEach(filter => {
        filter.addEventListener("change", () => {
            const value = filter.value;

            if (value === "all") {
                displayProducts(products);
                return;
            }

            const [min, max] = value.split("-").map(Number);

            const filtered = products.filter(p =>
                p.price >= min && p.price <= max
            );

            displayProducts(filtered);
        });
    });
}
