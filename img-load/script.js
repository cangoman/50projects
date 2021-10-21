const img = document.querySelector('.bg');
const text = document.querySelector('.loading-text');

let load = 0;
let interval = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(interval);
    }
    text.innerText = `${load}%`;
    text.style.opacity = scale(load, 0, 100, 1, 0);
    const blur = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    img.style.filter = blur;   
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}