import products from "./products";

const productName: string = "tote bag";
let product;

for (const each of products) {
  if (each.name === productName) {
    product = each;
  }
}

if (product.preOrder === "true") {
  console.log(`We'll send you a message when the item is ready to be shipped`);
}

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

let shippingAddress: string = "365 Church Street, Toronto, ON, M5B 0B5";

if (Number(product.price) > 25) {
  shipping = 0;
  console.log(`This order includes free shipping!`);
} else {
  shipping = 5;
}

if (shippingAddress.includes(`New York`)) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = product.price * taxPercent;
total = taxTotal + shipping + Number(product.price);

console.log(
  `Product: ${product.name},
  Shipping Address: ${shippingAddress},
  Price: $${product.price},
  Tax: $${taxTotal},
  Shippin: $${shipping},
  Total: $${total}
  `
);
