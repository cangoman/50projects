const buttons = document.querySelectorAll('.ripple');


buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnTop = e.target.offsetTop;
        const btnLeft = e.target.offsetLeft;
        const x = e.clientX - btnLeft;
        const y = e.clientY - btnTop;
        
        const span = document.createElement('span');
        span.className = 'circle';
        
        span.style.top = `${y}px`;
        span.style.left = `${x}px`;

        btn.appendChild(span);

        setTimeout(() => {
            span.remove();
        }, 500)

    })
})
