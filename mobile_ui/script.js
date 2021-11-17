const imgs = document.querySelectorAll('.content');
const navItems = document.querySelectorAll('nav ul li');


navItems.forEach( (item, idx) => {
    item.addEventListener('click', () => {
        navItems.forEach( navItem => {
            navItem === item ? item.classList.add('active') : navItem.classList.remove('active')
        })

        imgs.forEach( (img, i) => {
            idx === i ? img.classList.add('show') : img.classList.remove('show')
        })
    })
})