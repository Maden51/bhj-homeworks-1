const rotator = Array.from(document.querySelectorAll('.rotator__case'));
index = 0;
let delay = 1000;

rotator.forEach(element => {
    element.style.color = element.getAttribute('data-color'); 
});


function rotate() {
    if (index === rotator.length - 1) {
        rotator[index].classList.remove('rotator__case_active');
        index = 0;
        rotator[index].classList.add('rotator__case_active');
    } else {
        rotator[index].classList.remove('rotator__case_active');
        rotator[index + 1].classList.add('rotator__case_active');
        index++;
    }
}

let timerId = setTimeout(function rotateTimer(){
    
        
    timerId = setTimeout(rotate, 1000);
     
}, 1000);
