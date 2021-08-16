const interests = document.querySelector('ul');
const checkBoxes = Array.from(document.querySelectorAll('.interest__check'));

interests.onclick = () => {
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].onchange = () => {
            if (checkBoxes[i].checked == true) {
                Array.from(checkBoxes[i].closest('.interest').querySelectorAll('.interest__check')).forEach(e => e.checked = true);
            }
            if (checkBoxes[i].checked == false) {
                Array.from(checkBoxes[i].closest('.interest').querySelectorAll('.interest__check')).forEach(e => e.checked = false);
            }
        }
    }
}