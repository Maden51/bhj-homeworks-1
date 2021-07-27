const countdown = function() {
    const count = document.getElementById("timer");
    count.textContent--;
}
let timerId = setInterval(countdown, 1000);
setTimeout(() => { clearInterval(timerId); alert('«Вы победили в конкурсе!»'); }, 59000);