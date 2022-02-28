const { format } = require("path/posix");

const socket=io('http://localhost:8000')

constform= document.getElementById('send-container');
const messageInput= document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');


const append=(message,pos)=>{
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    messageElement.classList.add('info');
    messageElement.classList.add(pos);
    messageContainer.append(messageElement);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message=messageInput.nodeValue;
    append(`YouL: ${message}`,'right');
    socket.emit('send',message);
    messageInput.value='';
})

const userName = prompt("Enter name to join");
socket.emit('new-user-joined',userName)

socket.on('user-joined',userName=>{
    append(`${userName} joined the chat`,'right');

})

socket.on('receive',data=>{
    append(`${data.userName} :${data.message}`);

})