// chang colour when selecting a payment
const paymentContainer = document.querySelector(".payment-container1");
const paymentContainer2 = document.querySelector(".payment-container2");

paymentContainer.addEventListener("click", function (changeColour) {
  paymentContainer.style.borderColor = "#ffa149";
});

paymentContainer2.addEventListener("click", function (changeColour) {
    paymentContainer2.style.borderColor = "#ffa149";
  });