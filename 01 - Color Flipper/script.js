const btn1 = document.getElementById("btn1");

const btn2 = document.getElementById("btn2");

const color = document.querySelector(".color");

let autoChange;

btn1.addEventListener("click", () => {changeColor()});

btn2.addEventListener("click", () => {toggleAutoChange()});

function changeColor(){
    const randomColor = getRandomColor();
    color.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
}

function getRandomColor(){
    const numbers = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += numbers[Math.floor(Math.random() * 16)];
    }
    return color;
}

function toggleAutoChange() {
    if (autoChange) {
      clearInterval(autoChange);
      autoChange = null;
    } else {
        autoChange = setInterval(changeColor, 1000);
    }
  }