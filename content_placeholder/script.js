const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_text = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="">`;
    title.innerHTML = 'Lorem ipsum dolor sit amet.';

    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, consequuntur.';

    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/lego/8.jpg" alt="">`;

    name.innerHTML =  'John Doe';
    date.innerHTML = 'Oct. 2021';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}