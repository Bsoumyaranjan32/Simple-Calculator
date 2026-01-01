let currentExperession = '';

function appendNumber(number) {
    currentExperession += number;
    document.getElementById('result').value = currentExperession;
}

function appendOperator(operator) {
    currentExperession += ` ${operator} `;
    document.getElementById('result').value = currentExperession;
}

function clearResult() {
    currentExperession = '';
    document.getElementById('result').value = '';
}

function clearDelete() {
    currentExperession = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        currentExperession = eval(currentExperession.replace('÷').replace('x', '*', '%'));
        document.getElementById('result').value = currentExperession;
    } catch {
        document.getElementById('result').value ='Error';
    }
}
