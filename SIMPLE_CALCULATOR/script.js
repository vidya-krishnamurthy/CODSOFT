// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.textContent = '';
        } else if (value === '=') {
            if (currentInput && previousInput && operator) {
                currentInput = calculate(previousInput, currentInput, operator);
                display.textContent = currentInput;
                previousInput = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput && !operator) {
                previousInput = currentInput;
                currentInput = '';
                operator = value;
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

function calculate(num1, num2, operator) {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operator) {
        case '+':
            return (number1 + number2).toString();
        case '-':
            return (number1 - number2).toString();
        case '*':
            return (number1 * number2).toString();
        case '/':
            return (number1 / number2).toString();
        default:
            return num2;
    }
}
