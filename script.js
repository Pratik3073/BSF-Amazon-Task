const products = [
    { name: "iQOO 15", price: 68999, image: "images/iqoo15-removebg-preview.png", subtitle: "Snapdragon 8 Elite Gen 5 + Q3 chip" },
    { name: "OnePlus 15", price: 68999, image: "images/oneplue_15-removebg-preview (1).png", subtitle: "Snapdragon 8 Gen 5" },
    { name: "Samsung M17 5G", price: 12499, image: "images/samsung_galaxy_m_17-removebg-preview.png", subtitle: "50MP No Shake Camera" },
    { name: "OnePlus Nord 5", price: 30749, image: "images/oneplus_nord_5-removebg-preview.png", subtitle: "Up to 6 Months No Cost EMI" },
    { name: "Narzo 80 Lite", price: 7799, image: "images/realme_NARZO_80_Lite_4G-removebg-preview.png", subtitle: "6300 mAh Battery" },
    { name: "Redmi A4 5G", price: 7699, image: "images/Redmi_A4_5G-removebg-preview.png", subtitle: "Snapdragon 4 Gen 2 5G Processor" },
    { name: "iPhone 16", price: 62900, image: "images/iphone_16-removebg-preview.png", subtitle: "Built For Apple Intelligence" },
    { name: "iQOO Neo 10R", price: 25999, image: "images/iQOO_Neo_10R_5G-removebg-preview.png", subtitle: "Snapdragon 8s Gen 3 processor" },
    { name: "Galaxy S25 Ultra", price: 118999, image: "images/Samsung_Galaxy_S25_Ultra-removebg-preview.png", subtitle: "AI ProVisual Engine" },
    { name: "POCO M6 Plus", price: 10299, image: "images/POCO_M6_Plus_5G-removebg-preview.png", subtitle: "Snapdragon 4 Gen 2 AE" },
    { name: "Honor X9c 5G", price: 21999, image: "images/HONOR_X9c_5G_Dual_SIM-removebg-preview.png", subtitle: "108MP OIS AI Camera" },
    { name: "Lava Agni 4 5G", price: 24999, image: "images/Lava_Agni_4_5G-removebg-preview.png", subtitle: "Dimensity 8350 processor" }
];

let cartCount = 0;

function displayProducts(list) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    if (list.length === 0) {
        grid.innerHTML = `<div class="no-products">No products found in this price range.</div>`;
        return;
    }

    list.forEach(p => {
        const oldPrice = p.price + Math.floor(p.price * 0.15);

        grid.innerHTML += `
            <div class="card" onclick="addToCart()">
                
                <img src="${p.image}" class="main-img">

                <div class="card-title">${p.name}</div>

                <div class="card-subtitle">${p.subtitle}</div>

                <div class="price-box">
                    <span class="old-price">₹${oldPrice.toLocaleString()}</span>
                    <span>₹${p.price.toLocaleString()}</span>
                </div>

                <div class="small-note">*including bank offer</div>

            </div>
        `;
    });
}

displayProducts(products);

function addToCart() {
    cartCount++;
    document.getElementById("cartCount").innerText = cartCount;
}

document.querySelectorAll("input[name='price']").forEach(filter => {
    filter.addEventListener("change", () => {

        if (filter.value === "all") return displayProducts(products);

        const [min, max] = filter.value.split("-").map(Number);
        const filtered = products.filter(p => p.price >= min && p.price <= max);

        displayProducts(filtered);
    });
});


/* 🔍 SEARCH FUNCTION */
document.getElementById("searchInput").addEventListener("input", searchProducts);
document.getElementById("searchBtn").addEventListener("click", searchProducts);

function searchProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(query)
    );

    displayProducts(filtered);
}
