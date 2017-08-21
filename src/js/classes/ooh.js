import ColorPoint from './color-point.js'

class Ooh {
  constructor () {
    // try imported ColorPoint class
    var cp = new ColorPoint(1, 2, 'red')
    console.log(cp.toString())
  }

  zoomImg (target) {
    target.parentElement.style.cursor = 'zoom-in'
    target.style.cursor = 'inherit'
    target.addEventListener(
      'click',
      function (ev) {
        var target = ev.target
        var wrapper = document.createElement('div')
        var clone = target.cloneNode(true)
        clone.style.cursor = 'zoom-out'
        clone.style.position = 'fixed'
        clone.style.zIndex = '999999999'
        clone.style.top = '50%'
        clone.style.left = '50%'
        clone.style.transform = 'translate(-50%,-50%)'
        clone.style.maxWidth = '100%'
        clone.style.maxHeight = '100%'
        clone.src = clone.getAttribute('zoomable')
        wrapper.style.position = 'fixed'
        wrapper.style.zIndex = '999999998'
        wrapper.style.top = '0'
        wrapper.style.right = '0'
        wrapper.style.bottom = '0'
        wrapper.style.left = '0'
        wrapper.style.background = 'rgba(255,255,255,.9)'
        wrapper.appendChild(clone)
        wrapper.addEventListener('click', function () { this.parentElement.removeChild(this) })
        wrapper.style.cursor = 'zoom-out'
        target.parentElement.appendChild(wrapper)
      }
    )
  }
}

export default Ooh
