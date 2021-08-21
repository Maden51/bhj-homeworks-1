const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');


const getRandomQuest = function() {
    let xhr = new XMLHttpRequest();
    let url = 'https://netology-slow-rest.herokuapp.com/poll.php';
    xhr.open('GET', url);
    xhr.send();

    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const parsedResponse = JSON.parse(xhr.responseText);
            pollTitle.innerText = parsedResponse.data.title;
            parsedResponse.data.answers.forEach(element => {
                const pollButton = document.createElement('button');
                pollButton.classList.add('poll__answer');
                pollButton.innerText = `${element}`;
                pollButton.addEventListener('click', function() {alert('Спасибо, ваш голос зачтён!')});
                pollAnswers.appendChild(pollButton);
            });
        }
    })
}

getRandomQuest();