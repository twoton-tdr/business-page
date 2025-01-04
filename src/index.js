import "./style.css"
import { generateLandingPage } from "./script/landing"
import { generateMenu } from "./script/menu"
import { generateAboutPage } from "./script/about"

generateLandingPage()

const homeButton = document.querySelector("#home-button")
const menuButton = document.querySelector("#menu-button")
const aboutButton = document.querySelector("#about-button")

homeButton.addEventListener("click",() =>
    {
        content.innerHTML = "";
        generateLandingPage();
    })

menuButton.addEventListener("click",()=>{
    content.innerHTML= "";
    generateMenu()
})

aboutButton.addEventListener("click",()=>{
    content.innerHTML = "";
    generateAboutPage()
})