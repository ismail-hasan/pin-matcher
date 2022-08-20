function getPin() {
    const pin = genaratePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        console.log("number lengrh is too short", pin)
        return getPin();
    }

}

function genaratePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-btn').addEventListener('click', function () {
    const pin = getPin();
    const ganarateField = document.getElementById('ganarateField');
    ganarateField.value = pin;
    // console.log(pin);
});

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    if (isNaN(number)) {
        // console.log(number);
    }
    else {
        const typeNumberField = document.getElementById('type-number');
        const preTypeNumberField = typeNumberField.value;
        const newTypeNumber = preTypeNumberField + number;
        typeNumberField.value = newTypeNumber;
    }
})