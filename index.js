import { Snowflake } from "wasm-snowflakes";

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
document.body.appendChild(canvas);

const flakesCount = 4000;
const snowflakes = [];

for(let s = 0; s < flakesCount; s++) {
    snowflakes.push(Snowflake.new(window.innerWidth, window.innerHeight));
}

function update() {

    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for(const flake of snowflakes) {
        flake.tick();
        context.save();
        context.beginPath();
        context.arc(flake.x(), flake.y(), flake.radius(), 0, Math.PI * 2);
        context.closePath();
        context.fillStyle = '#FFF';
        context.globalAlpha = flake.opacity();
        context.fill();
        context.restore();
    }

    requestAnimationFrame(update);
}

requestAnimationFrame(update);

