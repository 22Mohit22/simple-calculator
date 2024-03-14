const allNumBtns = document.querySelectorAll('.num');
const allOperators = document.querySelectorAll('.operand');
const displayNum1 = document.querySelector('#display-num1');
const displayOperand = document.querySelector('#display-operand');
const displayNum2 = document.querySelector('#display-num2');
const equalsEl = document.querySelector('#equals-to');
const clearEl = document.querySelector('#clear');
const decimalEl = document.querySelector('#decimal');

function add() {
    return parseFloat(x) + parseFloat(y);
}
function sub() {
    return parseFloat(x) - parseFloat(y);
}
function mul() {
    return parseFloat(x) * parseFloat(y);
}
function div() {
    return parseFloat(x) / parseFloat(y);
}

function calculate() {
    if(operand == '+') {
        return add();
    } else if (operand == '-') {
        return sub();
    } else if (operand == 'x') {
        return mul();
    } else if (operand == '/') {
        return div();
    } else {
        console.log('something went wrong');
    }
}

let x = '';
let operand = '';
let y = ''

allNumBtns.forEach(number => {
    number.addEventListener('click', () => {
        handleNumClick(number.textContent);
    })
})

function handleNumClick(e) {

    // this func checks if x is empty or x is not empty 
    // and operator is empty to then it will append 
    // the value to the x variable and to display 
    // if both the condition are false then it appends it
    // to y variable


    if(x == '' || (x != '' && operand == '')) {
        displayNum1.value += e;
        x += e;
    } else {
        displayNum2.value += e;
        y += e;
    }
}

const zeroEl = document.getElementById('zero');

zeroEl.addEventListener('click', () => {    
    if(x != '' && operand == ''){
        displayNum1.value += zeroEl.textContent;
        x += zeroEl.textContent;
    } else if(x != '' && operand != '' && y != '') {
        displayNum2.value += zeroEl.textContent;
        y += zeroEl.textContent;
    }
})