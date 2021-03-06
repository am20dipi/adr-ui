//import "./test.css"
//console.log("test")

import Tooltip from './ui/tooltip'
import Dropdown from './ui/dropdown'
import Tabs from './ui/tabs'
import Snackbar from './ui/snackbar'


// create a tooltip by grabbing the DOM element by class name
// instantiate new instance of class Tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'))
// initialize new instance of tooltip
tooltip.init()


// create dropdown by grabbing DOM element by class name
const dropdown = new Dropdown(document.querySelector('.dropdown'))
// initialize new instance of dropdown
dropdown.init()


// create tabs
const tabs = new Tabs(document.querySelector('.container'))
// initialize new instances of tabs
tabs.init()


// create snackbar
const snackbar = new Snackbar()
// initialize new instance of Snackbar
snackbar.init()

// create ref to button
// append event listener to button to call show() on our instance of snackbar
const button = document.querySelector('button')
button.addEventListener("click", () => {
    snackbar.show("hi there! welcome!")
})



