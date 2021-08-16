const phrase = Array.from(document.querySelectorAll('.reveal'))

window.addEventListener('scroll', function(){
    phrase.forEach(e => {
        const top = e.getBoundingClientRect().top;
        top > 0 && top < window.innerHeight ? e.classList.add('reveal_active') : e.classList.remove('reveal_active');
    })
});