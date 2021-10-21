const toggle = document.getElementById('toggle');

const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const days = ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday", "Sunday"];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

toggle.addEventListener('click', () => {
    const html = document.getElementsByTagName('html')[0];
    html.classList.toggle('dark')
    toggle.innerText = `${html.classList.contains('dark') ? 'Light' : 'Dark'} mode`;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours < 12 ? 'am' : 'pm';

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 359)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 359)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 359)}deg)`;
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes}${ampm}`;


    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${day}</span>`
}

setTime();

setInterval(setTime, 1000);
