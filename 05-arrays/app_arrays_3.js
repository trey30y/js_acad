// forEach()
const prices = [10.99, 5.99, 3.99, 6.59, 7.49];
const tax = 0.19;
const taxAdjustedPrices = [];

prices.forEach((price, index) => {
  const taxAdjustedPrice = price * (1 + tax);
  const priceObj = { index: index, price: taxAdjustedPrice };
  taxAdjustedPrices.push(priceObj);
});

const displayObjPrice = function (prices) {
  prices.forEach((price) => {
    for (const key in price) {
      if (key === "index") {
        process.stdout.write(`idx ${price[key]}: `);
      } else {
        console.log(Number(price[key].toFixed(2)));
      }
    }
  });
};

displayObjPrice(taxAdjustedPrices);
