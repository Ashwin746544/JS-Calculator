let keyBtns = document.querySelectorAll(".key");
let enteredTextBtn = document.querySelector("#enteredtext");
let clearBtn = document.querySelector("#clear");
Array.from(keyBtns).forEach((keyBtn) => {
  if (keyBtn.value == "=") {
    keyBtn.addEventListener("click", calculate);
  } else {
    keyBtn.addEventListener("click", display);
  }
});

function display() {
  let enteredText = enteredTextBtn.value;
  // let arr = ["*", "/", "+", "-"];
  // if (arr.includes(enteredText.charAt(enteredText.length - 1)) && arr.includes(this.value)) { //method-1
  if (/[\+\-\*\/]$/.test(enteredText) && /[\+\-\*\/]/.test(this.value)) {
    enteredTextBtn.value = enteredTextBtn.value.slice(0, enteredText.length - 1) + this.value;
  } else {
    enteredTextBtn.value += this.value;
  }

}
function calculate() {
  try {
    enteredTextBtn.value = eval(enteredTextBtn.value);
  }
  catch (err) {
    enteredTextBtn.value = "Error";
  }
}
clearBtn.addEventListener("click", () => {
  enteredTextBtn.value = "";
})