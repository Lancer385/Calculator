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
    if (num2 == 0) {
        return ("THE HELL ARE YOU DOING");
    }
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
    }
}


let calculation = {
    num1 : 0,
    operator: "",
    num2 : 0,
};
const buttons = {
    backSpace : document.querySelector("#backSpace"),
    equal : document.querySelector("#equal"),
    numbers : document.querySelectorAll(".numbers"),
    operators : document.querySelectorAll(".operator")
};
const display = {
    input : document.querySelector("#input"),
};
let deletion = 0;


buttons.numbers.forEach((number)=> {
    number.addEventListener("click", ()=>{
        display.input.innerText += number.innerText;
        if (calculation.num2 == 0){
            calculation.num1 = parseInt(display.input.innerText);
        }
        else {
            calculation.num2 = parseInt(display.input.innerText);
        }
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
        calculation.num2 = 1;
        deletion = 1;
    });
});

buttons.equal.addEventListener("click", () =>{
    display.input.innerText = operate(calculation.num1, calculation.operator, calculation.num2);
})