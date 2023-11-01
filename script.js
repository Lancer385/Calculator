function add(num1,num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}
function operate(num1, operator, num2){
    switch (operator){
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "":
            return num1; // num1 will always store the result after calculation. just putting it so nothing breaks.
    }
}


let calculation = {
    num1 : 0,
    operator: "",
    num2 : 0,
    result : 0
};

let switches = {
    reset : 0, // resets numbers input upon pressing either an operator button or equal button.
    stop : 0 // stops continuous calculation using equal button.
}

const buttons = {
    backSpace : document.querySelector("#backSpace"),
    equal : document.querySelector("#equal"),
    numbers : document.querySelectorAll(".numbers"),
    operators : document.querySelectorAll(".operator"),
    clear : document.querySelector("#C"),
    decimal : document.querySelector("#decimal")
};

const display = {
    input : document.querySelector("#input"),
};



buttons.numbers.forEach((number)=> {
    number.addEventListener("click", ()=>{
        if (switches.reset == 1){
            display.input.innerText = "";
            switches.reset = 0;
        }
        let limit = display.input.innerText.length;
        if (limit < 10){
        display.input.innerText += number.innerText;
            if (calculation.num2 == 0){
                calculation.num1 = parseFloat(display.input.innerText);
            }
            else {
                calculation.num2 = parseFloat(display.input.innerText);
            }
        }
        switches.stop = 1;
        console.log("num1:" ,calculation.num1);
        console.log("num2:", calculation.num2);
    });
});


buttons.decimal.addEventListener("click", () =>{
    if (display.input.innerText.includes(".") === false){
        if (switches.reset == 1){
            display.input.innerText = "";
            switches.reset = 0;
        }
        let limit = display.input.innerText.length;
        if (limit < 10){
        display.input.innerText += buttons.decimal.innerText;
            if (calculation.num2 == 0){
                calculation.num1 = parseFloat(display.input.innerText);
            }
            else {
                calculation.num2 = parseFloat(display.input.innerText);
            }
        }
    }
});

buttons.operators.forEach((operator) =>{
    operator.addEventListener("click", () =>{
        if (operator !== ""){
            calculation.result =  Math.round(operate(calculation.num1, calculation.operator, calculation.num2)*1000) / 1000;
            if (calculation.result === Infinity){
                display.input.innerText = "don't mess with me";
                calculation.num1 = 0;
            }
            else{
                display.input.innerText = calculation.result;
                calculation.num1 = parseFloat(display.input.innerText);
            }
        }
        switch (operator.innerText){
            case 'x':
                calculation.operator = "x";
                break;
            case "+":
                calculation.operator = "+";
                break;
            case "/":
                calculation.operator = "/";
                break;
            case "-":
                calculation.operator = "-";
                break;
        }
        calculation.num2 = calculation.num1;
        switches.reset = 1;
        switches.stop = 1;
        console.log ("operator:", calculation.operator);
    });
});

buttons.equal.addEventListener("click", () =>{
    if(switches.stop == 1) {
        calculation.result =  Math.round(operate(calculation.num1, calculation.operator, calculation.num2) * 1000) /1000;
        if (calculation.result === Infinity){
            display.input.innerText = "don't mess with me";
            calculation.num1 = 0;
        }
        else{
            display.input.innerText = calculation.result;
            calculation.num1 = parseFloat(display.input.innerText);
        }
        switches.stop = 0;
    }
    switches.reset = 1;
    calculation.operator = "";
    console.log("result:", calculation.result);
});


buttons.backSpace.addEventListener("click", () =>{
    display.input.innerText = display.input.innerText.slice(0, -1);
    if (calculation.num2 == 0){
        calculation.num1 = parseFloat(display.input.innerText);
    }
    else {
        calculation.num2 = parseFloat(display.input.innerText);
    }
    switches.stop = 1;
});

buttons.clear.addEventListener("click", () => {
    display.input.innerText = '';
    calculation.num1 = 0;
    calculation.num2 = 0;
    calculation.operator = '';
});