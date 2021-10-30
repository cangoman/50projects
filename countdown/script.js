const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMsg = document.querySelector('.final');
const replay = document.querySelector('#replay');


runAnimation();

function resetDOM() {
    counter.classList.remove('hide');
    finalMsg.classList.remove('show');

    nums.forEach(num => num.className = '')
    nums[0].className = 'in';
}

function runAnimation() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1;
        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && idx !== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out');
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in');
            } else {
                counter.classList.add('hide');
                finalMsg.classList.add('show');
            }

        })
    })
}


replay.addEventListener('click', () => {
    resetDOM();
    runAnimation();
})