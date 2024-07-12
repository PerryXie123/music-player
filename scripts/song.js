
const range = document.getElementById('progress');

function updateRange() {
const value = (range.value - range.min) / (range.max - range.min) * 100;
range.style.background = `linear-gradient(to right, var(--secondary) 0%, var(--secondary) ${value}%, white ${value}%, white 100%)`;
}

updateRange();

range.addEventListener('input', updateRange);