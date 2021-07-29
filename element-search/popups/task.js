const allModals = Array.from(document.querySelectorAll('.modal'));
const modalsClose = Array.from(document.querySelectorAll('.modal__close'));

allModals[0].className = 'modal modal_active';

let closeMain = modalsClose[0];
let closeSuccess = modalsClose[2];
let dangerButton = document.querySelectorAll('a.show-success');
let successButton = document.querySelectorAll('a.btn_success');
closeMain.onclick = () => allModals[0].classList.remove('modal_active');
dangerButton[0].onclick = () => {
    allModals[0].classList.remove('modal_active');
    allModals[1].classList.add('modal_active');
}
closeSuccess.onclick = () => allModals[1].classList.remove('modal_active');