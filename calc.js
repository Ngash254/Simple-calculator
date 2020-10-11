let runningTotal = 0;
let buffer = "0";
let previousOperator = null;
const screen = document.querySelector(".screen");

document.querySelector(".calc-buttons").addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
});

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value)
    } else {
        handleNumber(value)
    }
    rerender();
};

function rerender(){
    screen.innerText = buffer;
}

function handleNumber(value) {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
    return buffer;
};

function handleSymbol(value) {
    switch(value){
        case "C":
            runningTotal = 0;
            previousOperator = null;
            buffer = "0";
            break;
        
        case "←":
            if (buffer.length === 1) {
                buffer = "0"
            } else {
                buffer = buffer.substring(0, buffer.length-1);
            }
            break;
        case "=":
            if (previousOperator === null) {
                return
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = "" + runningTotal;
            runningTotal = 0;
            break;
        default:
            handleMath(value);
            break;
    }
};

function flushOperation(intBuffer) {
    if (previousOperator === "+") {
        runningTotal += intBuffer;
    } else if (previousOperator === "X") {
        runningTotal *= intBuffer;
    } else if (previousOperator === "-") {
        runningTotal -= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
};

function handleMath(value){
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = value;
    buffer = "0";
};
