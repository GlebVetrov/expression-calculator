
function eval() {
    // Do not use eval!!!
    return;
}

function calculateNumber(mark , expresion , index) {
    let number;
    if (mark === '/') {
        number = expresion[index - 1] / expresion[index + 1];
    }
    if (mark === '*') {
        number = expresion[index - 1] * expresion[index + 1];
    }
    if (mark === '+') {
        number = +expresion[index - 1] + +expresion[index + 1];
    }
    if (mark === '-') {
        number = +expresion[index - 1] - +expresion[index + 1];
    }
    return number;
}

function calculate(expr) {
    const marksCalculation = ['/', '*', '-', '+'];
    let expresion = expr;
    marksCalculation.forEach(mark => {
        let index = expresion.indexOf(mark);
            while (index !== -1) {
                let number = calculateNumber(mark, expresion, index);
                expresion = [...expresion.slice(0, index - 1), number.toString(), ...expresion.slice(index + 2, expresion.length)];
                index = expresion.indexOf(mark);
            }
        });
    const [number] = expresion.filter((elem) => {
        return !isNaN(parseInt(elem));
    });
    console.log(number);
    return number;
}

function expressionCalculator(expr) {
    const rightBracket = ')';
    const leftBracket = '(';
    let exprArray = expr.split(' ');

    let firstRightBracket = exprArray.indexOf(rightBracket);
    let closeBracket = exprArray.lastIndexOf(leftBracket, firstRightBracket);

    while (firstRightBracket !== -1) {
        const expression = exprArray.slice(closeBracket, firstRightBracket + 1);
        let number = calculate(expression);
        exprArray = [...exprArray.slice(0, closeBracket), number, ...exprArray.slice(firstRightBracket + 1, exprArray.length)];
        firstRightBracket = exprArray.indexOf(rightBracket);
        closeBracket = exprArray.lastIndexOf(leftBracket, firstRightBracket);
    }
    console.log(exprArray);
    exprArray = calculate(exprArray);

    return parseFloat(parseFloat(exprArray).toFixed(4));
}

module.exports = {
    expressionCalculator
}

const expr = "2-2";

"Nested brackets test 28"
console.log(expressionCalculator(expr));
