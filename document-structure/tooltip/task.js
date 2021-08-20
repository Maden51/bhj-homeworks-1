const elemsWithToolTip = document.querySelectorAll('.has-tooltip');
const toolTip = document.createElement('div');
toolTip.classList.add('tooltip');

elemsWithToolTip.forEach((item) => {
    item.addEventListener('click', e => {
        e.preventDefault();
        item.appendChild(toolTip);

        let elemTopCoords = e.target.getBoundingClientRect().top;
        let elemLeftCoords = e.target.getBoundingClientRect().left;
        let textToolTip = item.getAttribute('title');

        toolTip.contains(document.querySelector('.tooltip_active')) && document.querySelector('.tooltip_active').innerText == e.target.title ? 
        toolTip.classList.remove('tooltip_active') : toolTip.classList.add('tooltip_active');

        toolTip.style.top = elemTopCoords + 20 + 'px';
        toolTip.style.left = elemLeftCoords + 'px';
        toolTip.innerText = textToolTip;
    });
});