const socket = io('ws://localhost:3000')

const form = document.querySelector('form')
form.addEventListener('submit', event => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const message = formData.get('message')
    socket.emit('message', message)
})

const ul = document.querySelector('ul')
socket.on('message', message => {
    const li = document.createElement('li')
    li.textContent = message
    ul.appendChild(li)
})