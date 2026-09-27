let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // eval is okay for this task, real app use math.js
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
    setTimeout(clearDisplay, 1000);
  }
}

// BONUS: Keyboard support for extra marks
document.addEventListener('keydown', (e) => {
  if ('0123456789+-*/.%'.includes(e.key)) {
    appendValue(e.key);
  }
  if (e.key === 'Enter') {
    calculate();
  }
  if (e.key === 'Backspace') {
    deleteLast();
  }
  if (e.key === 'Escape') {
    clearDisplay();
  }
});