const buttonSize = document.querySelector('.book__control_font-size');
const buttonColor = document.querySelector('.book__control_color');
const buttonBgColor = document.querySelector('.book__control_background');
const bookSize = document.querySelector('.book');
const sizeTabs = Array.from(document.querySelectorAll('.font-size'));
const colorTabs = Array.from(document.querySelectorAll('.color'));

    buttonSize.addEventListener('click', (event) => {
        sizeTabs.forEach(e => {
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

    buttonColor.addEventListener('click', (event) => {
        colorTabs.forEach(e => {
            e.classList.remove('color_active');
            event.preventDefault();
            event.target.classList.add('color_active');

            if (event.target.dataset.textColor === 'black') {
                bookSize.classList.remove('book_color-gray');
                bookSize.classList.remove('book_color-whitesmoke');
                bookSize.classList.add('book_color-black');
            }  else if (event.target.dataset.textColor === 'gray') {
                bookSize.classList.remove('book_color-black');
                bookSize.classList.remove('book_color-whitesmoke');
                bookSize.classList.add('book_color-gray');
            }  else {
                bookSize.classList.remove('book_color-black');
                bookSize.classList.remove('book_color-gray');
                bookSize.classList.add('book_color-whitesmoke');
            } 
        });
    })

    buttonBgColor.addEventListener('click', (event) => {
        colorTabs.forEach(e => {
            e.classList.remove('color_active');
            event.preventDefault();
            event.target.classList.add('color_active');

            if (event.target.dataset.bgColor === 'black') {
                bookSize.classList.remove('bg_color_gray');
                bookSize.classList.remove('bg_color_white');
                bookSize.classList.add('bg_color_black');
            }  else if (event.target.dataset.bgColor === 'gray') {
                bookSize.classList.remove('bg_color_black');
                bookSize.classList.remove('bg_color_white');
                bookSize.classList.add('bg_color_gray');
            }  else {
                bookSize.classList.remove('bg_color_black');
                bookSize.classList.remove('bg_color_gray');
                bookSize.classList.add('bg_color_white');
            }  
        });
    })
        