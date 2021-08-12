const phrase = Array.from(document.querySelectorAll('.reveal'))

window.addEventListener('scroll', function(){
    phrase.forEach(e => {
        e.getBoundingClientRect().top > 0 && e.getBoundingClientRect().top < window.innerHeight ?
        e.classList.add('reveal_active') : e.classList.remove('reveal_active');
    })
});