const API_URL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');


async function getUser(username) {
    try {
        const { data } = await axios(API_URL + username);
        createUserCard(data);
        getRepos(username)
    } catch(err) {
        if (err.response.status == 404) {
            createErrorCard('No profile with that username');
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(API_URL + username + '/repos?sort=created');
        addRepoData(data);
    } catch(err) {
        createErrorCard('problem fetching repos')
    }
}

function addRepoData(repos) {
    const reposEl = document.getElementById('repos');
    console.log(repos)

    repos
        .slice(0, 6)
        .forEach(repo => {
        const el = document.createElement('a');
        el.className = 'repo';
        el.href = repo.html_url;
        el.innerText = repo.name;

        reposEl.appendChild(el);

    })
}


function createUserCard(user) {
    const cardHTML = `
    <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
            <ul>
                <li>${user.followers}<strong>Followers</strong></li>
                <li>${user.following}<strong>Following</strong></li>
                <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>
            <div id="repos">
            </div>
            </div>
        </div>`

        main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
    const cardHTML = `<div class="card"><h1>${msg}</h1></div>`;

    main.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = search.value
    
    if (user) {
        getUser(user);
        search.value = '';
    }
});