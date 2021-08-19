const rotator = Array.from(document.querySelectorAll('.rotator__case'));
let delay = 1000;
let index = 0;

function rotate() {
    rotator.forEach((item) => item.classList.remove('rotator__case_active'));
    rotator[index].style.color = rotator[index].dataset.color;
    rotator[index].classList.add('rotator__case_active');
    
    delay = rotator[index].dataset.speed;
    setTimeout(rotate, delay);

    if (++index >= rotator.length) {
        index = 0;
    }
};

setTimeout(rotate, delay);
