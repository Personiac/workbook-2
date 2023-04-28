"use strict"
// Get the input fields and result field
const firstNumInput = document.getElementById("firstNum");
const secondNumInput = document.getElementById("secondNum");
const answerInput = document.getElementById("answer");

// Define the arithmetic functions
function add() {
  const result = parseFloat(firstNumInput.value) + parseFloat(secondNumInput.value);
  answerInput.value = result;
}

function subtract() {
  const result = parseFloat(firstNumInput.value) - parseFloat(secondNumInput.value);
  answerInput.value = result;
}

function multiply() {
  const result = parseFloat(firstNumInput.value) * parseFloat(secondNumInput.value);
  answerInput.value = result;
}

function divide() {
  const result = parseFloat(firstNumInput.value) / parseFloat(secondNumInput.value);
  answerInput.value = result;
}
