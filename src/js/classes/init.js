import Ooh from './ooh.js'
// var MenuSpy = require('menuspy')

class Init {
  constructor () {
    this.title1 = 'ES6 + webpack'
    this.title2 = 'is working!'
  }

  zoomImg (target) {
    target.parentElement.style.cursor = 'zoom-in'
    target.style.cursor = 'inherit'
    target.addEventListener(
      'click',
      function (ev) {
        var target = ev.target
        var wrapper = document.createElement('div')
        var clone = document.createElement('img')
        clone.src = target.src
        clone.classList.add('img-zoomed')
        wrapper.classList.add('img-zoomed-wrapper')
        wrapper.appendChild(clone)
        document.body.appendChild(wrapper)
        wrapper.addEventListener('click', function () { this.parentElement.removeChild(this) })
      }
    )
  }

  onload () {
    window.zoomImg = this.zoomImg
    document.body.querySelector('#theme-toggler').addEventListener('click', () => { document.body.classList.toggle('theme-dark') })

    let list = document.body.querySelector('#section-links')
    let sections = document.querySelectorAll('section[id]')

    sections.forEach((item) => {
      let anchor = document.createElement('a')
      let li = document.createElement('li')
      li.textContent = item.title
      li.classList.add('nav-bar-item')
      anchor.classList.add('nav-bar-link')
      anchor.href = `#${item.id}`
      anchor.appendChild(li)
      list.appendChild(anchor)
    })

    document.querySelectorAll('pre').forEach((el)=>{
      el.title = 'Double click to copy this code.'
      el.style.cursor = 'copy'
      el.addEventListener('dblclick', (ev) => {
        var copyTextarea = document.createElement('textarea')
        copyTextarea.style.width = '1px'
        copyTextarea.style.height = '1px'
        copyTextarea.value = el.textContent
        copyTextarea.setAttribute('readonly', 'true')
        el.parentElement.appendChild(copyTextarea)
        copyTextarea.select()

        try {
          var successful = document.execCommand('copy')
          var msg = successful ? 'successful' : 'unsuccessful'
          console.log('Copying text command was ' + msg)
        } catch (err) {
          console.log('Oops, unable to copy')
        }

        copyTextarea.parentElement.removeChild(copyTextarea)
      })
    })

    // var ms = new MenuSpy(
    //   list,
    //   {
    //     menuItemSelector: '.nav-bar-link',
    //     activeClass: 'nav-bar-link--active',
    //     threshold: 15,
    //     hashTimeout: 600,
    //     callback: () => { console.log(ms) }
    //   }
    // )
  }
}

export default Init
