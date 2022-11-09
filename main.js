var shallWe = document.querySelector('.shall-we')
var loadInputForm = document.querySelector('#loadInputForm')
var loadInput = document.querySelector('.loadInput')
var greetings = document.querySelector('.greetings')
var userName = document.querySelector('#user-name-form')
var nameInput = document.querySelector('#nameInput')

loadInputForm.addEventListener('submit', askUserName)

function typewriter(text, html, i) {
  if(i <= text.length) {
    console.log(text.substring(0, i))
    html.innerText = text.substring(0, i)
    setTimeout(function() {
      typewriter(text, html, i + 1)
    }, 100)
  } else {console.log('done')}
}

typewriter(shallWe.innerText, shallWe, 0)

function askUserName() {
  event.preventDefault()
  // if event
  console.log(event)
  userName.classList.toggle('hidden')
  nameInput.focus()
  typewriter(greetings.innerText, greetings, 0)

}