const count = document.getElementById("clicker__counter");
count.onclick = function() {
    count++;
};

const image = document.getElementById("cookie");
function changeSizes() {
    if (image.width === 200) {
        image.width = 150;
    } else if (image.width === 150) {
        image.width = 200;
    }
};

image.onclick = changeSizes;

