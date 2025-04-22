import data from "../data/db.json"
import "./css/style.scss"
import Background from "./components/background"
import { ButtonGroup, Button } from "./components/button"

const imagesInfo = data.images
const buttonsInfo = data.buttons

const body = document.querySelector("body")

let background1 = new Background(imagesInfo[1].address)
let background2 = new Background(imagesInfo[0].address)

body.appendChild(background1.dom)
body.appendChild(background2.dom)

const buttonGroup = new ButtonGroup()
body.appendChild(buttonGroup.dom)

buttonsInfo.forEach( buttonInfo => {
    const button = new Button(buttonInfo.classList)
    buttonGroup.add(button)
    console.log(button);
})

console.log(buttonGroup)
