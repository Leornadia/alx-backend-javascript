function sendPaymentRequestToAPI(totalAmount, taxAmount) {
  const total = totalAmount + taxAmount;
  console.log(`The total is: ${total}`); 
}

module.exports = sendPaymentRequestToAPI;
