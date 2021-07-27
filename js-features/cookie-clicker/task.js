const count = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
function changeSizes() {
    count.textContent++;
    image.width = image.width === 200 ? 250 : 200;
};

image.onclick = changeSizes;

