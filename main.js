var test = document.querySelector('.test')


function typewriter(text, html, i) {
  // var p = htmlElement.innerText
  // console.log(p)

  // var pArr = p.split('')
  console.log(i)
  
  // htmlElement.classList.toggle('hidden')
  // htmlElement.innerText = ''

  if(i <= text.length) {
    console.log(text.substring(0, i))
    html.innerText = text.substring(0, i)
    setTimeout(function() {
      typewriter(text, html, i + 1)
    }, 100)
  } else {console.log('done')}
  

  
}
typewriter(test.innerText, test, 0)