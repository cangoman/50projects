const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle')

let currentActive = 1;

nextBtn.addEventListener('click', () => {
    currentActive++;
    update();

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

});

prevBtn.addEventListener('click', () => {
    currentActive--;
    update();

    if (currentActive < 1) {
        currentActive = 1;
    }
});

function update() {
    circles.forEach((circle, idx) => {
        (idx < currentActive) ? circle.classList.add('active') : circle.classList.remove('active')
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    checkButtons();
}

function checkButtons() {
    if (currentActive === circles.length) {
        nextBtn.disabled = true;
    } else if (currentActive === 1) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}