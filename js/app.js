var display = document.getElementById("screen");
display.value = "";

// var sum = 0;

// var total = function() {
//   if (userEntry.includes("+")) {
//     console.log("Addition was used");
//   }
//   else if(userEntry.includes("-")) {
//     console.log("Subtraction was used");
//   }
// }



var clear = document.getElementById("clear");

var equals = document.querySelector(".equals");

var calcButtons = document.querySelectorAll(".calcBtn");

// Capture the elements with a class of "number"
var numbers  = document.querySelectorAll(".number");

var userEntry;
var answer;

for(var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function() {
    userEntry = display.value += this.value;
    // var answer = eval(userEntry);
  });
}

equals.addEventListener("click", function() {
  answer = eval(userEntry);
  display.value = answer;
});

// for(var i = 0; i < calcButtons.length; i++) {
//   calcButtons[i].addEventListener("click", function() {
//     display.value += this.value;
//   });
// }

// When the clear button is clicked, empty the index field
clear.addEventListener("click", function() {
  display.value = "";
});

// equals.addEventListener("click", getSum);
