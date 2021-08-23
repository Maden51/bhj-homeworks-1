const getMoneyDate = function() {
    let xhr = new XMLHttpRequest();
    let url = 'https://netology-slow-rest.herokuapp.com';
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();

    xhr.addEventListener('load', function(e) {
    if(xhr.readyState === 4 && xhr.status === 200) {
        document.querySelector('.loader').classList.remove('loader_active');
        const { Valute } = xhr.response.response;
        for (e in Valute) {
            document.querySelector('#items').innerHTML += `
                <div class ="item">
                <div class="item__code" style = 'display:inline;'>${Valute[e].CharCode}</div>
                <div class="item__value" style = 'display:inline;'>${Valute[e].Value}</div>
                <div class="item__currency" style = 'display:inline;'>руб.</div>
                </div>`
            }
        }
    })
};

window.addEventListener('DOMContentLoaded', function(e){
    getMoneyDate();
});

