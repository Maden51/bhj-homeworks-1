const countdown = function() {
    const count = document.getElementById("timer");
    count.textContent--;
}
setInterval(countdown, 1000);
setTimeout(() => { clearInterval(countdown); alert('«Вы победили в конкурсе!»'); }, 60000);