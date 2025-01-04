import menuImg from "../imgs/rb_2147759892.png"

export function generateMenu() {
    const content = document.querySelector("#content")
    

    const imgHolder = document.createElement("div")
    imgHolder.classList.add("img-holder")
    content.appendChild(imgHolder)
    content.style.display = "flex";
    content.style.justifyContent = "center"
    
    const MenuImage = document.createElement("img")
    MenuImage.src = menuImg ;
    imgHolder.appendChild(MenuImage)
    imgHolder.style.height = "720px"
}