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
            return num1;
    }
}


let calculation = {
    num1 : 0,
    operator: "",
    num2 : 0,
    result : 0
};

let switches = {
    deletion : 0,
    stop : 0
}

const buttons = {
    backSpace : document.querySelector("#backSpace"),
    equal : document.querySelector("#equal"),
    numbers : document.querySelectorAll(".numbers"),
    operators : document.querySelectorAll(".operator")
};
const display = {
    input : document.querySelector("#input"),
};



buttons.numbers.forEach((number)=> {
    number.addEventListener("click", ()=>{
        if (switches.deletion == 1){
            display.input.innerText = "";
            switches.deletion = 0;
        }
        let limit = display.input.innerText.length;
        if (limit < 10){
        display.input.innerText += number.innerText;
            if (calculation.num2 == 0){
                calculation.num1 = parseInt(display.input.innerText);
            }
            else {
                calculation.num2 = parseInt(display.input.innerText);
            }
        }
        switches.stop = 1;
        console.log("num1:" ,calculation.num1);
        console.log("num2:", calculation.num2);
    })
})


buttons.operators.forEach((operator) =>{
    operator.addEventListener("click", () =>{
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
        switches.deletion = 1;
        switches.stop = 1;
    });
});

buttons.equal.addEventListener("click", () =>{
    if(switches.stop == 1) {
        calculation.result =  operate(calculation.num1, calculation.operator, calculation.num2);
        if (calculation.result === Infinity){
            display.input.innerText = "don't mess with me";
        }
        else{
            display.input.innerText = calculation.result;
        }
        calculation.num1 = parseFloat(display.input.innerText);
        switches.stop = 0;
    }
    switches.deletion = 1;
    
    console.log("num1:" ,calculation.num1);
    console.log("num2:", calculation.num2);
    console.log("result:", calculation.result);
})