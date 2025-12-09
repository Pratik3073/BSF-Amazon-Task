import { products } from "./products.js";
import { displayProducts } from "./ui.js";
import { setupSearch } from "./search.js";
import { setupPriceFilter } from "./filter.js";
import { updateCartUI } from "./cart.js";

displayProducts(products);   // show all products
setupSearch();               // enable search
setupPriceFilter();          // enable price filter
updateCartUI();              // show saved cart count
