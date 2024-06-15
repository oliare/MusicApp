// phone mask
var phoneInput = document.getElementById('phone');
var maskOptions = {
    mask: '+00(000) 000-00-00'
};
var mask = IMask(phoneInput, maskOptions);


// checking if a user with that username exists
let border_user = document.querySelector('.input-box .input-field #username');
document.getElementById('username').addEventListener('input', function () {
    let username = this.value.trim();
    if (username !== '') {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '../php/check_username.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let response = xhr.responseText;
                let alreadyExist = document.getElementById('invalidUsername');
                if (response === 'exists') {
                    alreadyExist.textContent = 'Username already exists.';
                    alreadyExist.style.display = 'block';
                    border_user.style.borderColor = 'rgba(253, 47, 47, 0.403)'
                } else {
                    alreadyExist.textContent = '';
                    alreadyExist.style.display = 'none';
                    border_user.style.borderColor = ''
                }
            }
        };
        xhr.send('username=' + encodeURIComponent(username));
    }
});

// checking password matches
let passwordInput = document.getElementById('password');
let confirmPass = document.getElementById('confirmPass');
let border_pass = document.querySelector('.input-box .input-field #confirmPass');
let notMatch = document.getElementById('notMatch');

confirmPass.addEventListener('input', () => {
    const password = passwordInput.value;
    const password2 = confirmPass.value;

    if (password2 !== password) {
        notMatch.textContent = 'Passwords do not match.';
        notMatch.style.display = 'block';
        border_pass.style.borderColor = 'rgba(253, 47, 47, 0.403)'
    } else {
        notMatch.textContent = '';
        notMatch.style.display = 'none';
        border_pass.style.borderColor = ''
    }
});