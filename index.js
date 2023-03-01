const message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector('input')
    
    const movie = document.createElement('li')
    
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)
    inputField.value = ''

}

document.querySelector('form').addEventListener('submit', addMovie)

function deleteMovie(event) {
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    revealMessage()
    event.target.parentNode.remove();
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    
    if(event.target.classList.contains('checked') === true){
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}

function revealMessage(){
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}