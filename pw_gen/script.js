const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const symbolEl = document.getElementById('symbol');
const numberEl = document.getElementById('number');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasSymbol = symbolEl.checked;
    const hasNumber = numberEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const types = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]).map(item => randomFunc[Object.keys(item)]);

    if (types.length === 0) {
        return
    }

    for (let i = 0; i < length; i++) {
        const funcIdx = Math.floor(Math.random() * types.length);
        generatedPassword += types[funcIdx]();
    }
    return generatedPassword;
}


clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) {return}

    navigator.clipboard.writeText(password)
        .then(() => alert('PW copied to clipboard'))
        .catch( err => alert(`Failed to copy, ${err}`));
});


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


function getRandomLower() {
    const code = Math.floor(Math.random() * 26) + 97;
    return String.fromCharCode(code)
}

function getRandomUpper() {
    const code = Math.floor(Math.random() * 26) + 65;
    return String.fromCharCode(code)
}
function getRandomNumber() {
    const code = Math.floor(Math.random() * 10) + 48;
    return String.fromCharCode(code)
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    const code = Math.floor(Math.random() * symbols.length);
    return symbols[code]
}
