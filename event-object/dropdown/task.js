const dropdownButton = document.querySelector('.dropdown__value');
const dropdownItem = document.querySelector('.dropdown__item');
const link = document.querySelectorAll('.dropdown__link');
const dropdownList = document.querySelector('.dropdown__list');

dropdownButton.addEventListener('click', function(e) {
    dropdownList.classList.toggle('dropdown__list_active');
});
for (let i of link) {
    i.addEventListener('click', function(e) {
        e.preventDefault();
        dropdownButton.textContent = i.textContent;
        dropdownList.classList.remove('dropdown__list_active');
    });
}
