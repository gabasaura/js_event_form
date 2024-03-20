/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const form = document.getElementById("daForm");

function cancelForm() {
  form.reset();
  clearErrorMessage();
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (!validateForm()) {
    this.submit();
  }
});

const textarea = document.getElementById("message");
const num = document.getElementById("num");
textarea.addEventListener("input", () => {
  const maxLength = 111; // Maximum character limit
  const currentLength = textarea.value.length;
  const remainingLength = maxLength - currentLength;
  num.textContent = remainingLength;
});

function validateForm() {
  const alertMessage = document.getElementById("alertMessage");
  alertMessage.classList.remove("d-none");
  alertMessage.textContent = "";
  let hasError = false;

  const creditCardNumberInput = document.getElementById("creditCardNumber");
  const creditCardNumber = parseFloat(creditCardNumberInput.value);

  const cvcNumberInput = document.getElementById("cvcNumber");
  const cvcNumber = parseFloat(cvcNumberInput.value);

  const amountInput = document.getElementById("amount");
  const amount = parseFloat(amountInput.value);

  const firstNameInput = document.getElementById("firstName").value;
  const lastNameInput = document.getElementById("lastName").value;
  const cityInput = document.getElementById("city").value;
  const selectInput = document.getElementById("selectInput");
  const selectedOption = selectInput.value;
  const radioButtons = document.getElementsByName("option");
  const postalCodeInput = document.getElementById("postalCode").value;

  console.log("Submit Info:");
  console.log("Credit Card Number:", creditCardNumberInput);
  console.log("CVC Number:", cvcNumberInput);
  console.log("Amount:", amountInput);
  console.log("First Name:", firstNameInput);
  console.log("Last Name:", lastNameInput);
  console.log("City:", cityInput);
  console.log("Selected Option:", selectInput);
  console.log("Message:", textarea);

  clearErrorMessage();

  if (isNaN(creditCardNumber)) {
    alertMessage.innerHTML += "Please enter a valid credit card number.<br>";
    creditCardNumberInput.classList.add("is-invalid");
    hasError = true;
  } else {
    creditCardNumberInput.classList.remove("is-invalid");
    creditCardNumberInput.classList.add("is-valid");
  }

  if (isNaN(cvcNumber)) {
    alertMessage.innerHTML += "Please enter a valid cvc number.<br>";
    cvcNumberInput.classList.add("is-invalid");
    hasError = true;
  } else {
    cvcNumberInput.classList.remove("is-invalid");
    cvcNumberInput.classList.add("is-valid");
  }
  if (isNaN(amount)) {
    alertMessage.innerHTML += "Please enter a valid number for the amount.<br>";
    amountInput.classList.add("is-invalid");
    hasError = true;
  } else {
    amountInput.classList.remove("is-invalid");
    amountInput.classList.add("is-valid");
  }
  if (firstNameInput === "") {
    alertMessage.innerHTML += "Please enter your first name.<br>";
    firstName.classList.add("is-invalid");
    hasError = true;
  } else {
    firstName.classList.remove("is-invalid");
    firstName.classList.add("is-valid");
  }
  if (lastNameInput === "") {
    alertMessage.innerHTML += "Please enter your last name.<br>";
    lastName.classList.add("is-invalid");
    hasError = true;
  } else {
    lastName.classList.remove("is-invalid");
    lastName.classList.add("is-valid");
  }
  if (cityInput === "") {
    alertMessage.innerHTML += "Please enter your city.<br>";
    city.classList.add("is-invalid");
    hasError = true;
  } else {
    city.classList.remove("is-invalid");
    city.classList.add("is-valid");
  }
  if (selectedOption === "") {
    alertMessage.innerHTML += "Please select a state.<br>";
    hasError = true;
  }

  /* let isChecked = false;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (!isChecked) {
    alertMessage.innerHTML += "Please select your credit card.<br>";
    hasError = true;
  } 

  if (message.length > 100) {
    alertMessage.innerHTML +=
      "Please enter a message with at most 100 characters.";
    hasError = true;
    messageInput.classList.add("is-invalid");
  } else {
    messageInput.classList.remove("is-invalid");
  }*/

  if (postalCodeInput === "") {
    alertMessage.innerHTML += "Please enter your postal code.<br>";
    postalCode.classList.add("is-invalid");
    hasError = true;
  } else {
    postalCode.classList.remove("is-invalid");
    postalCode.classList.add("is-valid");
  }

  alertMessage.classList.add("d-block");
  return hasError;
}

function clearErrorMessage() {
  const alertMessage = document.getElementById("alertMessage");
  alertMessage.innerHTML = ""; // Clear error messages
}
