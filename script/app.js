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

clearDisplay.addEventListener("click", function () {
  display.textContent = "";
});

function getNum(numberToAdd) {
  if (display.textContent === 0) {
    display.textContent += `${numberToAdd}`;
    return;
  } else {
    display.textContent === 0;
  }
}

clearDisplay.addEventListener("click", function name(params) {
  clear();
});

function clear() {
  display.textContent = "0";
  return;
}
