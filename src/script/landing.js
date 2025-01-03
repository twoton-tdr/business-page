import landingImage from "./imgs/ice-cream-5928043_1280.jpg";

function generateLandingPage(){
    const content = document.querySelector("#content")

    const heroImg = document.createElement("div")
    heroImg.classList.add("hero-img");
    content.appendChild(heroImg)

    const imageHero = document.createElement("img")
    imageHero.src = landingImage;
    heroImg.appendChild(imageHero)

    const heroCaption = document.createElement("div")
    heroCaption.classList.add("hero-caption")

    const heroText = document.createElement("span")
    heroText.classList.add("hero-text")
    heroText.textContent = "Ice Creams at your door step within a blink of an eye"
    heroCaption.appendChild(heroText)

    const heroButton = document.createElement("button")
    heroButton.textContent = "Menu"
    heroCaption.appendChild(heroButton)
}