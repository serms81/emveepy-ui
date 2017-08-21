import './scss/main.scss'
import Init from './js/classes/init.js'

var petsTemplate = require('./templates/petsTemplate.hbs')
var navBar = require('./templates/navBar.hbs')

function loadNavBar () {
  document.getElementById('document-top').innerHTML = navBar()
}

function loadPets (petsData) {
  var petsContainer = document.getElementById('pets-container')
  if (petsContainer) petsContainer.innerHTML = petsTemplate(petsData)
}

var ourRequest = new XMLHttpRequest()

ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json')

ourRequest.onload = function () {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText)
    loadPets(data)
  } else {
    console.log('We connected to the server, but it returned an error.')
  }
}

ourRequest.onerror = function () {
  console.log('Connection error')
}

ourRequest.send()

loadNavBar()

var init = new Init()
init.onload()
