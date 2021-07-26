const hitCount = document.getElementById("dead");
const missCount = document.getElementById("lost");

let getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i < 9; i++) {
    const hole = getHole(i);
    hole.onclick = function() {
        if (hole.className.includes("hole_has-mole")) {
            hitCount.textContent++;
            if (hitCount.textContent === "10") {
                alert("Поздравляю, вы победили!");
                hitCount.textContent = "0";
                missCount.textContent = "0";
            }
        } else {
            missCount.textContent++;
            if (missCount.textContent === "5") {
                alert("Поражение");
                hitCount.textContent = "0";
                missCount.textContent = "0";
            }
        }
    }
}