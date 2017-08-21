import Ooh from './ooh.js'

class Init {

  constructor () {
    this.title1 = 'ES6 + webpack'
    this.title2 = 'is working!'
  }

  displayMessage () {
    const txt = `${this.title1}, ${this.title2}`
    alert(txt)
  }

  onload () {
    document.addEventListener(
      'DOMContentLoaded',
      function () {
        let body = document.querySelector('body')
        body.querySelectorAll('img[zoomable]').forEach((img) => { Ooh.zoomImg(img) })
        body.querySelector('#theme-toggler').addEventListener('click', () => { body.classList.toggle('theme-dark') })

        let list = document.getElementById('main-nav-bar').querySelector('ul')
        let sections = document.querySelectorAll('section[id]')

        sections.forEach((item) => {
          let anchor = document.createElement('a')
          let li = document.createElement('li')
          li.textContent = item.title
          anchor.href = `#${item.id}`
          anchor.appendChild(li)
          list.appendChild(anchor)
        })
      }
    )
  }
}

export default Init
