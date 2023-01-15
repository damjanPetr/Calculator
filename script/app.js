const display = document.getElementById("display");
const clearDisplay = document.querySelector(".clear");
const Delete = document.querySelector(".del");
const equal = document.querySelector(".equal");
const display2 = document.querySelector(".displayBackup");

// funciton Buttons
const substract = document.querySelector(".substract");
const multyply = document.querySelector(".multyply");
const devide = document.querySelector(".devide");
const equal2 = document.querySelector(".equal");
// function to delete the last number in teh display panel

const deleteNum = () => {
  const temp = display.textContent.length;
  if (temp === 1) {
    display.textContent = "0";
  } else {
    display.textContent = display.textContent.substring(0, temp - 1);
  }
  return;
};
Delete.addEventListener("click", deleteNum);

// Put to all buttons, event listeners with the gutNum function
const numberbutton = document.querySelectorAll(".calButton");
for (const iterator of numberbutton) {
  iterator.addEventListener("click", function () {
    const number = iterator.innerText;
    getNum(number);
  });
}
// function to write the number to the display panel,or

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
// function to clear the display panel by writing 0 to the text content

function turnScreenTo0() {
  display.textContent = "0";
  return;
}
// add event listener with the turn screen to 0 function

clearDisplay.addEventListener("click", turnScreenTo0);

function divisinon(a, b) {
  return a / b;
}

function subtraction(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

const add = document.querySelector(".add");
add.removeEventListener("click", addFun);
add.addEventListener("click", addFun);

function sum(a, b) {
  a = parseInt(a);
  b = parseInt(b);
  return a + b;
}
function addFun() {
  // add.removeEventListener("click", addFun);
  let turn = 0;

  const re = /\d*/;

  const filterednum = display.textContent.match(re).toString();

  display2.textContent = filterednum;

  const memoryContent = display2.textContent;

  turnScreenTo0();
  console.log(`this is memory contnt :${memoryContent}`);

  const screenNumber = display.textContent;

  let result;

  if (turn !== 0 && memoryContent.length > 0) {
    result = parseInt(sum(memoryContent, screenNumber));
    console.log(`this is the result:${result}`);
  }
  turn++;

  display.textContent = result;
}
