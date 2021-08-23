const textEditor = document.getElementById('editor');
const buttonClear = document.getElementById('clear');

textEditor.value = JSON.parse(localStorage.getItem('text'));
textEditor.addEventListener('keydown', function (e) {
    let textValue = e.target.value;
    localStorage.setItem('text', JSON.stringify(textValue));
})

buttonClear.addEventListener('click', function() {
    localStorage.clear();
    textEditor.value = null;
})

