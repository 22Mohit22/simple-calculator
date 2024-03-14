const allNumBtns = document.querySelectorAll('.num');
const allOperators = document.querySelectorAll('.operand');
const displayNum1 = document.querySelector('#display-num1');
const displayOperand = document.querySelector('#display-operand');
const displayNum2 = document.querySelector('#display-num2');
const equalsEl = document.querySelector('#equals-to');
const clearEl = document.querySelector('#clear');
const decimalEl = document.querySelector('#decimal');

decimalEl.addEventListener('click', () => {
    handleDecimalClick(decimalEl.textContent);
})

function handleDecimalClick(e) {
    
    let countX = 0;  
    let countY = 0;
    let x_Arr = x.split('');

    // the below foreach func is going through every digit 
    // of variable x 
    // and counting the number of decimal and if the count 
    // is goes above 1 it stops counting.
    x_Arr.forEach(digit => {
        if(digit == e && countX < 1) {
            countX++;
        }
    })

    // same as aboue func but for variable y
    let y_Arr = y.split('');
    y_Arr.forEach(digit => {
        if(digit == e && countY < 1) {
            countY++;
        }
    })

    // now the below code chunk is checking for
    // the countx and county value if they are more than 1
    // it won't append the decimal to x, y or display 

    // basically this fuction check if the the count of decimal
    // in variable x or y is 1 which means that if the variable
    // already has a decimal it won't append the decimal 

    if(x == '' || (x != '' && operand == '')) {
        if(countX < 1) {
            displayNum1.value += e;
            x += e;
        }
    } else {
        if(countY < 1) {
            displayNum2.value += e;
            y += e;
        }
    }
    
}

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
let y = '';

clearEl.addEventListener('click', clear);

function clear() {
    displayNum1.value = '';
    displayOperand.value = '';
    displayNum2.value = '';
    x = '';
    operand = '';
    y = '';
}

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

const finalDisplay = document.querySelector('#big-display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        finalDisplay.value = displayNum1.value + displayOperand.value + displayNum2.value;
    })
})

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
