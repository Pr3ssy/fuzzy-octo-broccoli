// Get the text input element
var textInput = document.getElementById("textbtn");

// Function to append the clicked button's value to the input field
function appendToInput(value) {
    textInput.value += value;
}

// Function to clear the input field
function clearInput() {
    textInput.value = "";
}

// Function to delete the last character in the input field
function deleteCharacter() {
    textInput.value = textInput.value.slice(0, -1);
}

// Function to calculate and display the result
function calculateResult() {
    try {
        textInput.value = eval(textInput.value);
    } catch (error) {
        textInput.value = "Error";
    }
}

// Attach click event handlers to buttons
document.getElementById("btn0").onclick = clearInput;
document.getElementById("btn1").onclick = function() { var textInput = document.getElementById("textbtn");
textInput.value = textInput.value.slice(0, -1);
};
document.getElementById("btn2").onclick = function() { appendToInput('.'); };
document.getElementById("btn3").onclick = function() { appendToInput('/'); };
document.getElementById("btn4").onclick = function() { appendToInput('9'); };
document.getElementById("btn5").onclick = function() { appendToInput('8'); };
document.getElementById("btn6").onclick = function() { appendToInput('7'); };
document.getElementById("btn7").onclick = function() { appendToInput('*'); };
document.getElementById("btn8").onclick = function() { appendToInput('6'); };
document.getElementById("btn9").onclick = function() { appendToInput('5'); };
document.getElementById("btn10").onclick = function() { appendToInput('4'); };
document.getElementById("btn11").onclick = function() { appendToInput('-'); };
document.getElementById("btn12").onclick = function() { appendToInput('3'); };
document.getElementById("btn13").onclick = function() { appendToInput('2'); };
document.getElementById("btn14").onclick = function() { appendToInput('1'); };
document.getElementById("btn15").onclick = function() { appendToInput('+'); };
document.getElementById("btn16").onclick = function() { appendToInput('00'); };
document.getElementById("btn17").onclick = function() { appendToInput('0'); };
document.getElementById("btn18").onclick = function() {
    var textInput = document.getElementById("textbtn");
    var value = '%';

    if (value === '%') {
        textInput.value = parseFloat(textInput.value) / 100;
    }
 
    else {
        textInput.value += value;
    }
};

document.getElementById("btn19").onclick = calculateResult;
