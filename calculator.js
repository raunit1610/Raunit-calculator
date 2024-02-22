let expression = " ";
let exp = [];
let res = [];

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
        exp.push(expression);
        const result = eval(expression);
        res.push(result);
        document.getElementById('result').innerText = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
        exp.push("Error");
    }
}

function updateResult() {
    document.getElementById('result').innerText = expression;
}

function clearResult() {
    expression = "";
    updateResult();
}

function hist() {
    const historyList = document.getElementById('history');
    historyList.innerHTML = "";
    for (let i = 0; i < exp.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `${exp[i]} = ${res[i]}`;
        historyList.appendChild(listItem);
    }
}
