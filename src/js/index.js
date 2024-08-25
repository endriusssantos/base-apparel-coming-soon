emailInput = document.getElementById('input');
emailBtn = document.getElementById('btn');
errorText = document.getElementById('error-msg');
errorImg = document.getElementById('error-img');

emailBtn.addEventListener('click', () => {
    const inputValue = emailInput.value.trim();

    if (!isEmail(inputValue) || inputValue === '') {
        errorText.style.display = "block";
        errorImg.style.display = "block";
        emailInput.classList.add('error');
    } else {
        errorText.style.display = "none";
        errorImg.style.display = "none";
        emailInput.classList.remove('error');
    }
});

function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
};