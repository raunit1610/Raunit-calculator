//calculator.js

//Creating Resources
let expression = "";
let exp = [];
let res = [];
var flag = 0;

//Loading Previous contents
window.onload = function () {
    expression = localStorage.getItem('expression') || "";
    exp = JSON.parse(localStorage.getItem('exp')) || [];
    res = JSON.parse(localStorage.getItem('res')) || [];
    updateResult();
};

//Function to take numbers input
function appendNumber(number) {
    if (flag != 0) {
        flag = 0;
        clearResult();
    }
    expression += number;
    updateResult();
}

//Function to take Operator Input
function appendOperator(operator) {
    if (flag != 0) {
        flag = 0;
    }
    expression += " " + operator + " ";
    updateResult();
}

//Function To Take Brackets Input
function appendBracket(bracket) {
    expression += bracket;
    updateResult();
}

//Function To Compute Result
function calculate() {
    try {
        exp.push(expression);
        const result = eval(expression);
        res.push(result);
        document.getElementById('result').innerText = result;
        expression = result.toString();
        flag++;
        saveToLocalStorage();
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
        exp.push("Error");
        saveToLocalStorage();
    }
}

//Function To Update Result
function updateResult() {
    document.getElementById('result').innerText = expression;
}

//Function To Clear The Screen
function clearResult() {
    expression = "";
    updateResult();
}

//Function To Maintain History Of Calculations
function hist() {
    const historyList = document.getElementById('history');
    historyList.innerHTML = "";
    for (let i = 0; i < exp.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `${exp[i]} = ${res[i]}`;
        historyList.appendChild(listItem);
    }
}

//Function To Clear History
function clr_hist() {
    exp.splice(0, exp.length);
    res.splice(0, res.length);
    const historyList = document.getElementById('history');
    historyList.innerHTML = "";
    clearResult();
    saveToLocalStorage();
}

//Function to Apply Square Root
function appendSqrt() {
    try {
        exp.push(`sqrt(${expression})`);
        const result = Math.sqrt(expression);
        res.push(result);
        document.getElementById('result').innerText = result;
        expression = result.toString();
        flag++;
        saveToLocalStorage();
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
        exp.push("Error");
        saveToLocalStorage();
    }
}

//Function to Change (Normal -> Scientific) mode
function change_to_sci() {
    saveToLocalStorage();
    window.location.href = 'ind.html';
}
//Function to Change (Scientific -> Normal) mode
function change_to_nom() {
    saveToLocalStorage();
    window.location.href = 'index.html';
}

//Function To Apply Cos
function generateCosValue() {
    try {
        const result = eval(expression);

        if (!isNaN(result)) {
            const cosValue = Math.cos(result * (Math.PI / 180));
            exp.push(`cos(${expression})`);
            res.push(cosValue);
            document.getElementById('result').innerText = cosValue;
            expression = cosValue.toString();
            flag++;
            saveToLocalStorage();
        } else {
            throw new Error('Expression does not result in a valid number.');
        }
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
        exp.push("Error");
        saveToLocalStorage();
    }
}

//Function To Apply Sin
function generateSinValue() {
    try {
        const result = eval(expression);

        if (!isNaN(result)) {
            const sinValue = Math.sin(result * (Math.PI / 180));
            exp.push(`sin(${expression})`);
            res.push(sinValue);
            document.getElementById('result').innerText = sinValue;
            expression = sinValue.toString();
            flag++;
            saveToLocalStorage();
        } else {
            throw new Error('Expression does not result in a valid number.');
        }
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
        exp.push("Error");
        saveToLocalStorage();
    }
}

//Function To Apply Tan
function generateTanValue() {
    try {
        const result = eval(expression);

        if (!isNaN(result)) {
            const tanValue = Math.tan(result * (Math.PI / 180));
            exp.push(`tan(${expression})`);
            res.push(tanValue);
            document.getElementById('result').innerText = tanValue;
            expression = tanValue.toString();
            flag++;
            saveToLocalStorage();
        } else {
            throw new Error('Expression does not result in a valid number.');
        }
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
        exp.push("Error");
        saveToLocalStorage();
    }
}

//Function To Switch Value to Radian
function switchToRadian() {
    try {
        const result = eval(expression);

        if (!isNaN(result)) {
            const radianValue = result * (Math.PI / 180);
            exp.push(`rad(${expression})`);
            res.push(radianValue);
            document.getElementById('result').innerText = radianValue;
            expression = radianValue.toString();
            flag++;
            saveToLocalStorage();
        } else {
            throw new Error('Expression does not result in a valid number.');
        }
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
        exp.push("Error");
        saveToLocalStorage();
    }
}

//Function To Switch Value To Degree
function switchToDegree() {
    try {
        const result = eval(expression);

        if (!isNaN(result)) {
            const degreeValue = result * (180 / Math.PI);
            exp.push(`deg(${expression})`);
            res.push(degreeValue);
            document.getElementById('result').innerText = degreeValue;
            expression = degreeValue.toString();
            flag++;
            saveToLocalStorage();
        } else {
            throw new Error('Expression does not result in a valid number.');
        }
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
        exp.push("Error");
        saveToLocalStorage();
    }
}

//Function To Apply Log Function
function calculateLog() {
    try {
        const result = eval(expression);

        if (result > 0) {
            const logValue = Math.log10(result);
            exp.push(`log(${expression})`);
            res.push(logValue);
            document.getElementById('result').innerText = logValue;
            expression = logValue.toString();
            flag++;
            saveToLocalStorage();
        } else {
            throw new Error('Logarithm is undefined for non-positive numbers.');
        }
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
        exp.push("Error");
        saveToLocalStorage();
    }
}

//Function To Apply Ln Function
function calculateLn() {
    try {
        const result = eval(expression);

        if (result > 0) {
            const lnValue = Math.log(result);
            exp.push(`ln(${expression})`);
            res.push(lnValue);
            document.getElementById('result').innerText = lnValue;
            expression = lnValue.toString();
            flag++;
            saveToLocalStorage();
        } else {
            throw new Error('Natural logarithm is undefined for non-positive numbers.');
        }
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
        exp.push("Error");
        saveToLocalStorage();
    }
}

//Function To Calculate Inverse
function calculateInverse() {
    try {
        const result = eval(expression);

        if (result !== 0) {
            const inverseValue = 1 / result;
            exp.push(`inv(${expression})`);
            res.push(inverseValue);
            document.getElementById('result').innerText = inverseValue;
            expression = inverseValue.toString();
            flag++;
            saveToLocalStorage();
        } else {
            throw new Error('Cannot calculate the inverse of zero.');
        }
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
        exp.push("Error");
        saveToLocalStorage();
    }
}

//Function To Calculate Factorial
function calculateFactorial() {
    try {
        const result = eval(expression);

        if (Number.isInteger(result) && result >= 0) {
            const factorialValue = factorial(result);
            exp.push(`${expression}!`);
            res.push(factorialValue);
            document.getElementById('result').innerText = factorialValue;
            expression = factorialValue.toString();
            flag++;
            saveToLocalStorage();
        } else {
            throw new Error('Factorial is defined only for non-negative integers.');
        }
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
        exp.push("Error");
        saveToLocalStorage();
    }
}

//Function To Calculate Exponenetial
function calculateExponential() {
    try {
        const result = eval(expression);

        const exponentialValue = Math.exp(result);
        exp.push(`e^(${expression})`);
        res.push(exponentialValue);
        document.getElementById('result').innerText = exponentialValue;
        expression = exponentialValue.toString();
        flag++;
        saveToLocalStorage();
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
        exp.push("Error");
        saveToLocalStorage();
    }
}

//Function To Calculate Percentage
function calculatePercentage() {
    try {
        const result = eval(expression);

        const percentageValue = result / 100;
        exp.push(`(${expression})%`);
        res.push(percentageValue);
        document.getElementById('result').innerText = percentageValue;
        expression = percentageValue.toString();
        flag++;
        saveToLocalStorage();
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
        exp.push("Error");
        saveToLocalStorage();
    }
}

//Factorial Sub-Function
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

//Function To Save Data of The Current Screen
function saveToLocalStorage() {
    localStorage.setItem('expression', expression);
    localStorage.setItem('exp', JSON.stringify(exp));
    localStorage.setItem('res', JSON.stringify(res));
}
