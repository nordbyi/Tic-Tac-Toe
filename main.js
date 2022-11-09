var shallWe = document.querySelector('.shall-we')
var loadInputForm = document.querySelector('#loadInputForm')
var loadInput = document.querySelector('#loadInput')
var greetings = document.querySelector('.greetings')
var userNameForm = document.querySelector('#user-name-form')
var nameInput = document.querySelector('#nameInput')
var friendForm = document.querySelector('#friendForm')
var friend = document.querySelector('.friend')
var friendInput = document.querySelector('#friendInput')

typewriter(shallWe.innerText, shallWe, 0)

loadInputForm.addEventListener('submit', askUserName)
userNameForm.addEventListener('submit', startGame)

function typewriter(text, html, i) {
  if(i <= text.length) {
    console.log(text.substring(0, i))
    html.innerText = text.substring(0, i)
    setTimeout(function() {
      typewriter(text, html, i + 1)
    }, 75)
  } else {console.log('done')}
}

function askUserName() {
  event.preventDefault()
  if(event.target.children[1].value === 'y') {
    userNameForm.classList.toggle('hidden')
    nameInput.focus()
    typewriter(greetings.innerText, greetings, 0)
  } else if (event.target.children[1].value === 'n') {
    loadInput.value = ''
    typewriter('THEN I SHALL PLAY: GLOBAL THERMONUCLEAR WAR BY MYSELF. GOODBYE.', shallWe, 0)
  }
}

function startGame() {
  event.preventDefault()
  // use name to instatiate player 1 class
  friendForm.classList.toggle('hidden')
  friendInput.focus()
  // dynamically add player 1 name to friend.innerText
  typewriter(friend.innerText, friend, 0)
}