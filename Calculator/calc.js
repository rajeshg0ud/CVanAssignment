let display = document.getElementById('display');
        
function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function (event) {
    if (/^[0-9]$/.test(event.key)) {
        appendToDisplay(event.key);
    }
    
    if (['+', '-', '*', '/'].includes(event.key)) {
        appendToDisplay(event.key);
    }
    
    if (event.key === 'Enter') {
        calculate();
    }
    

    if (event.key === 'Escape') {
        clearDisplay();
    }

        
    if (event.key === '.') {
        appendToDisplay(event.key);
    }
});
