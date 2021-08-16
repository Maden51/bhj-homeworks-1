const buttonSize = document.querySelector('.book__control_font-size');
const buttonColor = document.querySelector('.book__control_color');
const buttonBgColor = document.querySelector('.book__control_background');
const bookSet = document.querySelector('.book');
const sizeTabs = Array.from(document.querySelectorAll('.font-size'));
const colorTabs = Array.from(document.querySelectorAll('.color'));

    buttonSize.addEventListener('click', (event) => {
        sizeTabs.forEach(e => {
            e.classList.remove('font-size_active');
            event.preventDefault();
            event.target.classList.add('font-size_active');

            if (event.target.dataset.size === 'small') {
                bookSet.classList.remove('book_fs-big');
                bookSet.classList.add('book_fs-small');
            }  else if (event.target.dataset.size === 'big') {
                bookSet.classList.remove('book_fs-small');
                bookSet.classList.add('book_fs-big');
            }  else {
                bookSet.classList.remove('book_fs-small');
                bookSet.classList.remove('book_fs-big');
            }
        });
    })

    buttonColor.addEventListener('click', (event) => {
        colorTabs.forEach(e => {
            e.classList.remove('color_active');
            event.preventDefault();
            event.target.classList.add('color_active');

            if (event.target.dataset.textColor === 'black') {
                bookSet.classList.remove('book_color-gray');
                bookSet.classList.remove('book_color-whitesmoke');
                bookSet.classList.add('book_color-black');
            }  else if (event.target.dataset.textColor === 'gray') {
                bookSet.classList.remove('book_color-black');
                bookSet.classList.remove('book_color-whitesmoke');
                bookSet.classList.add('book_color-gray');
            }  else {
                bookSet.classList.remove('book_color-black');
                bookSet.classList.remove('book_color-gray');
                bookSet.classList.add('book_color-whitesmoke');
            } 
        });
    })

    buttonBgColor.addEventListener('click', (event) => {
        colorTabs.forEach(e => {
            e.classList.remove('color_active');
            event.preventDefault();
            event.target.classList.add('color_active');

            if (event.target.dataset.bgColor === 'black') {
                bookSet.classList.remove('bg_color_gray');
                bookSet.classList.remove('bg_color_white');
                bookSet.classList.add('bg_color_black');
            }  else if (event.target.dataset.bgColor === 'gray') {
                bookSet.classList.remove('bg_color_black');
                bookSet.classList.remove('bg_color_white');
                bookSet.classList.add('bg_color_gray');
            }  else {
                bookSet.classList.remove('bg_color_black');
                bookSet.classList.remove('bg_color_gray');
                bookSet.classList.add('bg_color_white');
            }  
        });
    })
        