const form = document.getElementById('signin__form');
const sign = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

if(localStorage.id) {
    welcome.classList.add('welcome_active');
    sign.classList.remove('signin_active');
    userId.textContent = localStorage.id;
} else {
    sign.classList.add('signin_active');
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    const url = 'https://netology-slow-rest.herokuapp.com/auth.php';
    xhr.open('POST', url);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        if (xhr.response.success === true) {
            localStorage.id = xhr.response.user_id;
            sign.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            userId.textContent = localStorage.id;
        } else {
            form.reset();
            alert('Неверный логин или пароль');
        }
    })
    xhr.send(formData);
})