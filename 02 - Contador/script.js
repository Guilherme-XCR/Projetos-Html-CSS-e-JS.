
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const couterText = document.getElementById('counter');

increaseButton.addEventListener("click", () => {increase()});
decreaseButton.addEventListener("click", () => {decrease()});
resetButton.addEventListener("click", () => {reset()});

let counter = 0;

function updateCounter() {
    couterText.innerText = counter;
    couterText.style.color = counter < 0 ? "#d55956" : (counter > 0 ? "#5fbb88" : "#000");    
}

function increase() {
    counter++;
    updateCounter();
}

function decrease() {
    counter--;
    updateCounter();
}

function reset() {
    counter = 0;
    updateCounter();
}