let expression = "";

function appendNumber(number) {
    expression += number;
    updateResult();
}

function appendOperator(operator) {
    expression += " " + operator + " ";
    updateResult();
}

function calculate() {
    try {
        const result = eval(expression);
        document.getElementById('result').innerText = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
    }
}

function updateResult() {
    document.getElementById('result').innerText = expression;
}

function clearResult() {
    expression = "";
    updateResult();
}