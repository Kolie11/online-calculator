const inputOne = document.getElementById("input-el-one");
const inputTwo = document.getElementById("input-el-two");
const inputResult = document.getElementById("result");

const clearEl = document.getElementById("clear-btn");
const remainderEl = document.getElementById("remainder-btn");
const titleEl = document.getElementById("title-el");

const errorMsg = document.getElementById("error");

const frBtn = document.getElementById("fr-btn");
const geBtn = document.getElementById("ge-btn");

const labelOneEl = document.getElementById("labelOne");
const labelTwoEl = document.getElementById("labelTwo");
const labelThreeEl = document.getElementById("labelThree");

frBtn.addEventListener("click", function () {
  labelOneEl.textContent = "Première valeur";
  labelTwoEl.textContent = "Seconde valeur";
  labelThreeEl.textContent = "Résultat";
  errorMsg.style.display = "none";
  clearEl.textContent = "Effacer";
  remainderEl.textContent = "Reste";
  titleEl.textContent = "Calculatrice en ligne";
});

geBtn.addEventListener("click", function () {
  labelOneEl.textContent = "Erster Wert";
  labelTwoEl.textContent = "Zweiter Wert";
  labelThreeEl.textContent = "Ergebnis";
  errorMsg.style.display = "none";
  clearEl.textContent = "Löschen";
  remainderEl.textContent = "Rest";
  titleEl.textContent = "Online-Rechner";
});

function add() {
  const numOne = parseFloat(inputOne.value);
  const numTwo = parseFloat(inputTwo.value);

  const result = numOne + numTwo;

  inputResult.value = result;
}
function subtract() {
  const numOne = parseFloat(inputOne.value);
  const numTwo = parseFloat(inputTwo.value);

  const result = numOne - numTwo;

  inputResult.value = result;
}
function multiply() {
  const numOne = parseFloat(inputOne.value);
  const numTwo = parseFloat(inputTwo.value);

  const result = numOne * numTwo;

  inputResult.value = result;
}
function divide() {
  const numOne = parseFloat(inputOne.value);
  const numTwo = parseFloat(inputTwo.value);

  if (numTwo === 0) {
    let err = "Error";
    errorMsg.style.display = "block";
    errorMsg.innerHTML = `<p>${err}</p>`;
  } else {
    inputResult.value = numOne / numTwo;
  }
}

function remainder() {
  const numOne = parseFloat(inputOne.value);
  const numTwo = parseFloat(inputTwo.value);

  if (numTwo === 0) {
    let err = "Error: Division by zero";
    errorMsg.style.display = "block";
    errorMsg.innerHTML = `<p>${err}</p>`;
  } else {
    inputResult.value = numOne % numTwo;
    errorMsg.style.display = "none";
  }
}

function clearFields() {
  inputOne.value = "";
  inputTwo.value = "";
  inputResult.value = "";
  errorMsg.style.display = "none";
}
