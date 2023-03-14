const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.querySelector('body');
const btn = document.querySelector('button');

function randomColor() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

function linearGradient(value1, value2) {
    return `linear-gradient(to right, ${value1}, ${value2})`;
}

function setGradient() {
    body.style.background = linearGradient(color1.value, color2.value);
    css.textContent = linearGradient(color1.value, color2.value) + ';';
}

function setRandomGradient() {
    let randomColor1 = randomColor();
    let randomColor2 = randomColor();

    body.style.background = linearGradient(randomColor1, randomColor2);

    color1.value = randomColor1;
    color2.value = randomColor2;

    css.textContent = linearGradient(randomColor1, randomColor2) + ';';
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
btn.addEventListener('click', setRandomGradient);

body.style.background = linearGradient(color1.value, color2.value);
css.textContent = linearGradient(color1.value, color2.value) + ';';
