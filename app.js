const colorInputs = document.querySelectorAll('.colors input');
const textarea = document.querySelector('.textarea p');
const gradientBox = document.querySelector('.gradient-box');
const selectBox = document.querySelector('select');
const copyBtn = document.querySelector('.copy');

function generateGradient() {
    const gradient  = `linear-gradient(${selectBox.value},  ${colorInputs[0].value}, ${colorInputs[1].value});`;
    textarea.innerText = `background: ${gradient}`;
    gradientBox.style = textarea.innerText;
    document.querySelector('body').style = textarea.innerText;
};

colorInputs.forEach(input => {
    input.addEventListener('input', generateGradient);
});

selectBox.addEventListener('change', generateGradient)

function copyCode() {
    navigator.clipboard.writeText(textarea.innerText);
    textarea.innerText = 'Code Copied';
    setTimeout(() => textarea.innerText = `background: linear-gradient(${selectBox.value},  ${colorInputs[0].value}, ${colorInputs[1].value});`, 1000)
}

copyBtn.addEventListener('click' , copyCode)