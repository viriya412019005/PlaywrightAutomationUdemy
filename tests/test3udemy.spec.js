let productPrices = [11, 12, 12.5, 16]; // harga dalam dolar misalnya

let discountedPrices = productPrices.map((price) => price * 0.9); // diskon 10%
let affordableProducts = discountedPrices.filter((price) => price < 50); // di bawah $50
let totalCost = affordableProducts.reduce((sum, price) => sum + price, 0);

console.log("Harga setelah diskon:", discountedPrices);
console.log("Produk terjangkau:", affordableProducts);
console.log("Total biaya produk terjangkau:", totalCost);
