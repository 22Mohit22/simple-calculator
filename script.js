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

allOperators.forEach(operator => {
    operator.addEventListener('click', () => {
        handleOperatorClick(operator.textContent);
    })
})

function handleOperatorClick(e) {

    // this func checks if y is not empty then it will
    // replace the older value of the operand with clicked value
    // else if x is empty it will don't give any value to operand
    // and if both the condition doesn't fit which means the x and 
    // y both have some values it will calculate according to the 
    // earlier assigned operator and will display result and 
    // clear display and set the operator the clicked operator and
    // then only y would be typeable 
    
    if(x != '') {
        if(y == '') {
            operand = e;
            displayOperand.value = e;
        } else if(x == '') {
            operand = '';
        } else {
            displayNum1.value = calculate();
            x = displayNum1.value;
            operand = e;
            displayOperand.value = e;
            y = '';
            displayNum2.value = '';
        }
    }
}

equalsEl.addEventListener('click', () => {
    if(x != '' && operand != '' && y != '') {
        displayNum1.value = calculate();
        x = displayNum1.value;
        operand = '';
        displayOperand.value = '';
        y = '';
        displayNum2.value = '';
    }
});

