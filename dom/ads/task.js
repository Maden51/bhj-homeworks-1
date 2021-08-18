const rotator = Array.from(document.querySelectorAll('.rotator__case'));
let delay = 1000;
let index = 0;

setInterval(function() {
    rotator.forEach((item) => item.classList.remove('rotator__case_active'));

    rotator[index].classList.add('rotator__case_active');
    rotator[index].style.color = rotator[index].dataset.color;

    delay = rotator[index].dataset.speed;
    console.log(delay);

    if (++index >= rotator.length) {
        index = 0;
    }
}, delay);
