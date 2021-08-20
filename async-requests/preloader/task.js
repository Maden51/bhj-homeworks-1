const getMoneyDate = function() {
    let xhr = new XMLHttpRequest();
    let url = 'https://netology-slow-rest.herokuapp.com';
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();

    xhr.addEventListener('readystatechange', function(e) {
    if(xhr.readyState === 4 && xhr.status === 200) {
        document.querySelector('.loader').classList.remove('loader_active');
        const valute = xhr.response.response.Valute;
        for (e in valute) {
            document.querySelector('#items').innerHTML += `
                <div class ="item">
                <div class="item__code" style = 'display:inline;'>${valute[e].CharCode}</div>
                <div class="item__value" style = 'display:inline;'>${valute[e].Value}</div>
                <div class="item__currency" style = 'display:inline;'>руб.</div>
                </div>`
            }
        }
    })
};

window.addEventListener('DOMContentLoaded', function(e){
    getMoneyDate();
});

