const display = document.getElementById("display");
const clearDisplay = document.querySelector(".clear");
const Delete = document.querySelector("del");

const numberbutton = document.querySelectorAll(".calButton");
for (const iterator of numberbutton) {
  iterator.addEventListener("click", function () {
    const number = iterator.innerText;
    console.log(number);
    getNum(number);
  });
}

function getNum(numberToAdd) {
  if (display.textContent.length < 15) {
    if (display.textContent === "0") {
      display.textContent = "";
    }
    display.textContent += `${numberToAdd}`;
    return;
  } else {
    display.textContent === 0;
  }
}

clearDisplay.addEventListener("click", function () {
  display.textContent = "0";
  return;
});

function sum(a, b) {
  return a + b;
}
function divisinon(a, b) {
  return a / b;
}

function subtraction(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

const add = document.querySelector("add");
const substract = document.querySelectorAll("substract");
const multyply = documentation.querySelector("multyply");
const devide = document.querySelector("devide");
const equal = document.querySelector("equal");

add.addEventListener("click", function () {
  const screenNumber = display.textContent;
  clearDisplay();
});
