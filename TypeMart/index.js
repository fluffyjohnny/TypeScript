"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var productName = "tote bag";
var product;
for (
  var _i = 0, products_2 = products_1["default"];
  _i < products_2.length;
  _i++
) {
  var each = products_2[_i];
  if (each.name === productName) {
    product = each;
  }
}
if (product.preOrder === "true") {
  console.log("We'll send you a message when the item is ready to be shipped");
}
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = "365 Church Street, Toronto, ON, M5B 0B5";
if (Number(product.price) > 25) {
  shipping = 0;
  console.log("This order includes free shipping!");
} else {
  shipping = 5;
}
if (shippingAddress.includes("New York")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}
taxTotal = product.price * taxPercent;
total = taxTotal + shipping + Number(product.price);
console.log(
  "\n Product: "
    .concat(product.name, ",\n  Shipping Address: ")
    .concat(shippingAddress, ",\n  Price: $")
    .concat(product.price, ",\n  Tax: $")
    .concat(taxTotal, ",\n  Shippin: $")
    .concat(shipping, ",\n  Total: $")
    .concat(total, "\n  ")
);
