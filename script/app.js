const display = document.getElementById("display");
const clearDisplay = document.querySelector(".clear");
const Delete = document.querySelector(".del");
// const equal = document.querySelector(".equal");
const display2 = document.querySelector(".displayBackup");
const diplays = document.getElementById("symboldisplay");

const add = document.querySelector(".add");

// function Buttons
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
let content = 0;

function getNum(numberToAdd) {
  // console.log(`${content}`);

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

function turnBOTHScreenTo0() {
  display.textContent = "0";
  display2.textContent = "0";
  content = 0;

  return;
}
function turnSINGLEScreenTo0() {
  display.textContent = "0";
  return;
}
// add event listener with the turn screen to 0 function

clearDisplay.addEventListener("click", turnBOTHScreenTo0);

function divisinon(a, b) {
  if (b === "") {
    b = 0;
  }
  a = Number.parseInt(a);
  b = Number.parseInt(b);
  let c = Number.parseInt(a / b);
  turnSINGLEScreenTo0();
  // console.log(typeof c);
  return c;
}

function subtraction(a, b) {
  if (b == "") {
    b = 0;
  }
  a = Number.parseInt(a);
  b = Number.parseInt(b);
  let c = Number.parseInt(a - b);
  turnSINGLEScreenTo0();
  // console.log(typeof c);
  return c;
}

function multiply(a, b) {
  if (b == "") {
    b = 0;
  }
  a = Number.parseInt(a);
  b = Number.parseInt(b);
  let c = Number.parseInt(a * b);
  turnSINGLEScreenTo0();
  // console.log(typeof c);
  return c;
}

function addition(a, b) {
  if (b == "") {
    b = 0;
  }
  a = Number.parseInt(a);
  b = Number.parseInt(b);
  let c = Number.parseInt(a + b);
  turnSINGLEScreenTo0();
  // console.log(typeof c);
  return c;
}

const operators = document.querySelectorAll(".operator");

for (const iterator of operators) {
  iterator.addEventListener("click", (e) => {
    operate(e.target.textContent);
  });
}

function operate(arg) {
  if (arg === "+") {
    console.log(`${display2.textContent} THIS is greed display `);

    content += Number.parseInt(display.textContent);

    display2.textContent = addition(display.textContent, display2.textContent);
    // display2.textContent = addition(display.textContent, content);
  } else if (arg === "-") {
    content = content + Number.parseInt(display.textContent);

    display.textContent = subtraction(
      display.textContent,
      display2.textContent
    );
  } else if (arg === "*") {
    content *= Number.parseInt(display.textContent);

    display.textContent = multiply(display.textContent, display2.textContent);
  } else if (arg === "/") {
    display.textContent = divisinon(display.textContent, display2.textContent);

    content = content + Number.parseInt(display.textContent);
  } else if (arg === "=") {
    content = content + Number.parseInt(display.textContent);
    display.textContent = content;
    display2.textContent = 0;
    content = 0;
    console.log("uhtneoahutneoahutnao");
  }
  console.log(`first: ${content}`);

  return;
}
