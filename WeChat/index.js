const socket = io('http://127.0.0.1:3000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInput');
const messageContainer = document.querySelector('.container');

let audio = new Audio('sound.mp3');
const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if(position == 'left'){
        audio.play();
    }
}

const name  = prompt('Enter your name to jo in');
socket.emit('new-user-joined', name);

socket.on('user-joined', (name) =>{
append(`${name} joined the chat`);
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();                 // prevents the page to reload when it calls/press
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = '';
})
socket.on('receive', data =>{
    append(`${data.name}: ${data.message}`, 'left');
});

socket.on('left', name =>{
    append(`${name} left the chat`, 'center');
})
