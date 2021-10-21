
const container = document.querySelector('.container');
const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
    btn.addEventListener('click', () => container.classList.toggle('show-nav'))
})
