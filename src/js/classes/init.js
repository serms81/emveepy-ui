class Init {

  constructor () {
    this.title1 = 'ES6 + webpack'
    this.title2 = 'is working!'
  }

  displayMessage () {
    const txt = `${this.title1}, ${this.title2}`
    alert(txt)
  }
}

export { Init }
