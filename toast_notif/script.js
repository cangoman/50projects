const toastsContainer = document.getElementById('toasts');
const button = document.getElementById('button');

const messages = [
    'Message 1',
    'Another Message',
    'Hello, Message',
    'YAAM',
    'Yet Another Annoying Message'
];

const types = [
    'info',
    'success',
    'error'
]

const toast = document.createElement('div');
toast.className = 'toast';

button.addEventListener('click', () => createNotification())

function createNotification(message=null, type=null) {
    const idx = Math.floor(Math.random() * messages.length);
    const typeIdx = Math.floor(Math.random() * types.length);
    const node = toast.cloneNode();
    
    node.innerText = message ? message : messages[idx];
    type ? node.classList.add(type) : node.classList.add(types[typeIdx]);

    toastsContainer.appendChild(node);

    setTimeout(() => node.remove(), 2000)
}