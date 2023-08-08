const shippingCart = [
  { name: "shoes", price: 1200, quantity: 5 },
  { name: "pant", price: 2000, quantity: 2 },
  { name: "T-shirt", price: 800, quantity: 3 },
  { name: "Jacket", price: 1500, quantity: 7 },
];

function totalCost(products) {
  let cost = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productTotal=product.quantity*product.price;
    const price = product.price;
    cost = cost + productTotal;
    // console.log(price)
  }
  return cost;
}

const totalCostData = totalCost(shippingCart);
console.log(totalCostData);
