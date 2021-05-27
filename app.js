const title = document.querySelector('h1')

const textAnimation = element => (letter,index) => {
    setTimeout(()=> {
        element.innerHTML += letter
    },100 * index)
  }

const typeWrite = (element) => {
  const textArray = element.innerHTML.split('')
  element.innerHTML = ''
  textArray.forEach(textAnimation(element))
}

typeWrite(title)