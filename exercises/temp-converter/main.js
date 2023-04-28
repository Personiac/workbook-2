"use strict";
// Get the input fields and result field
const fInput = document.getElementById("fahrenheit");
const cInput = document.getElementById("celsius");
const answerInput = document.getElementById("answer");

// C = (F - 32) * (5/9)
function fToC() {
  const result = (parseFloat(fInput.value) - 32) * (5 / 9);
  answerInput.innerText = (`${result.toFixed(2)}°C`);
}

//F = (C × 9/5) + 32
function cToF() {
  const result = parseFloat(cInput.value) * (9 / 5) + 32;
  answerInput.innerText = (`${result.toFixed(2)}°F`);
}
