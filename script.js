const screen = document.querySelector(".screen_text");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equal_sign");

const first = digits.forEach(function (screen) {
  screen.addEventListener("click", function () {
    addDigit(screen.textContent);
  });
});

function addDigit(digit) {
  screen.textContent += digit;
}

operators.forEach(function (screen) {
  screen.addEventListener("click", function () {
    addOperator(screen.textContent);
  });
});

function addOperator(operator) {
  screen.textContent += operator;
}

equals.addEventListener("click", function () {
  //console.log(first.value);
});
