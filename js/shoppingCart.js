//Change colour when selecting an order
const cartBox1 = document.querySelector(".cart-box-container1");
const cartBox2 = document.querySelector(".cart-box-container2");
const circular1 = document.querySelector(".circular1");
const circular2 = document.querySelector(".circular2");

cartBox1.addEventListener("click", function (changeColour) {
  circular1.style.borderColor = "#ffa149";
});

circular1.addEventListener("click", function (changeColour) {
  circular1.style.borderColor = "#ffa149";
});

cartBox2.addEventListener("click", function (changeColour) {
  circular2.style.borderColor = "#ffa149";
});

circular2.addEventListener("click", function (changeColour) {
  circular2.style.borderColor = "#ffa149";
});

//change the price after selecting orders
const txtPrice = document.querySelector(".txt-price");
const txtCheckOutPrice = document.querySelector(".txt-Check-out-price");

circular1.addEventListener("click", function (updatePrice) {
  const priceValue = txtPrice.innerText.match(/(\d+)/);
  console.log(priceValue[0]);
  const priceValueFinal = priceValue[0] * 30;
  txtCheckOutPrice.innerText = "SEK " + priceValueFinal;
});

circular2.addEventListener("click", function (updatePrice) {
  const priceValue = txtPrice.innerText.match(/(\d+)/);
  console.log(priceValue[0]);
  const priceValueFinal = priceValue[0] * 30;
  txtCheckOutPrice.innerText = "SEK " + priceValueFinal;
});

cartBox1.addEventListener("click", function (updatePrice) {
  const priceValue = txtPrice.innerText.match(/(\d+)/);
  console.log(priceValue[0]);
  const priceValueFinal = priceValue[0] * 30;
  txtCheckOutPrice.innerText = "SEK " + priceValueFinal;
});

cartBox2.addEventListener("click", function (updatePrice) {
  const priceValue = txtPrice.innerText.match(/(\d+)/);
  console.log(priceValue[0]);
  const priceValueFinal = priceValue[0] * 30;
  txtCheckOutPrice.innerText = "SEK " + priceValueFinal;
});

// circular1.addEventListener("click", function (updatePrice) {
//   const priceValue = txtPrice.innerText;
//   txtCheckOutPrice.innerText =priceValue;
// });
