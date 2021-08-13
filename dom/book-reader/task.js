const buttonSize = document.querySelector('.book__control_font-size');
const bookSize = document.querySelector('.book');
const tabs = Array.from(document.querySelectorAll('.font-size'));

    buttonSize.addEventListener('click', (event) => {
        tabs.forEach(e => {
            e.classList.remove('font-size_active');
            event.preventDefault();
            event.target.classList.add('font-size_active');

            if (event.target.dataset.size === 'small') {
                bookSize.classList.remove('book_fs-big');
                bookSize.classList.add('book_fs-small');
            }  else if (event.target.dataset.size === 'big') {
                bookSize.classList.remove('book_fs-small');
                bookSize.classList.add('book_fs-big');
            }  else {
                bookSize.classList.remove('book_fs-small');
                bookSize.classList.remove('book_fs-big');
            }
        });
    })
        