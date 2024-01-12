document.getElementById("darkModeSwitch").addEventListener("change", toggleBackground)
function toggleBackground() {
    document.body.classList.toggle("dark");
};

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw the ellipse
ctx.fillStyle = "red"
ctx.beginPath();
ctx.ellipse(50, 190, 30, 20);
ctx.stroke()
ctx.fill()
