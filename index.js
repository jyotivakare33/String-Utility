const inputValue = document.querySelector('.input');
const counter = document.querySelector('.character-result');
const wordCount = document.querySelector('.first-result');
const lowercase = document.querySelector('.lowercase');
const uppercase = document.querySelector('.uppercase');
const result = document.querySelector('.result');

inputValue.addEventListener('input', () => {
    counter.innerHTML = `${inputValue.value.length} \n Character Count`;
    wordCount.innerHTML = `${inputValue.value.trim().split(/\s+/).length} \n Word Count`;
});

lowercase.addEventListener('click', () => {
    result.innerHTML = inputValue.value.toLowerCase();
});

uppercase.addEventListener('click', () => {
    result.innerHTML = inputValue.value.toUpperCase();
});
