const canvas = document.getElementById('canvas');
const colorInput = document.getElementById('color');
const ctx = canvas.getContext('2d');
const incBtn = document.getElementById('increase');
const decBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const clearEl = document.getElementById('clear')

let size = 10;
let inc = 5;
let isPressed = false;
let color = 'black';
let x, y;

colorInput.addEventListener('change', e => color = e.currentTarget.value
);

clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

incBtn.addEventListener('click', () => {
    updateSize(size + inc);
});

decBtn.addEventListener('click', () => {
    updateSize(size - inc);
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true);
    ctx.fillStyle = color;
    ctx.fill();
};

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();

};

function updateSize(newSize) {
    if (newSize <= 50 && newSize >= 5) {
        size = newSize;
        sizeEl.innerText = `${newSize}`;
    }
}

