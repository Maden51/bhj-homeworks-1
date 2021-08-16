let openChat = document.querySelector('.chat-widget__side');
let chatWidget = document.querySelector('.chat-widget');
let chat = document.getElementById('chat-widget__input');
let chatMessages = document.querySelector('.chat-widget__messages');

function getWord() {
    const answerList = [
    'Добрый день, как ваше ничего?',
    'Сегодня мы не отвечаем на вопросы.',
    'Вы ещё здесь?',
    'Опять вы, что вам надо?',
    'Ну ладно-ладно, скоро с вами свяжутся.',
    'Вы любите котиков?'
    ],
    index = Math.floor(Math.random() * answerList.length);
    return answerList[index];
}

let clientMessage = '';
chat.oninput = () => {
    clientMessage = chat.value;
}

openChat.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
    chatMessages.innerHTML += `
    <div class="message">
    <div class="message__time">${getCurrentTime()}</div>
    <div class="message__text">Добрый день!
    </div>`
})

function getCurrentTime() {
    let time = new Date().toLocaleTimeString().split(":");
    return time[0] + ':' + time[1];
}

chat.addEventListener('keydown', function (event) {
    if (event.key == 'Enter' && clientMessage != '') {
        chatMessages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${getCurrentTime()}</div>
        <div class="message__text">${clientMessage}</div>
        </div>`

        chat.value = '';
        clientMessage = '';

        chatMessages.innerHTML += `
        <div class="message">
        <div class="message__time">${getCurrentTime()}</div>
        <div class="message__text">${getWord()}</div>
        </div>`
    }
})



