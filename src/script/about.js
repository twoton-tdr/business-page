import shopImage from "../imgs/images.jpg"

export function generateAboutPage(){
    const content = document.querySelector("#content")
    content.style.display = "flex";
    content.style.justifyContent = "center";
    content.style.alignItems = "center";

    const aboutSection = document.createElement("div")
    content.appendChild(aboutSection)
    aboutSection.classList.add("about-section")

    const title = document.createElement("span")
    title.classList.add("title")
    title.textContent = "About Us"
    aboutSection.appendChild(title)

    const shopImg = document.createElement("div")
    shopImg.classList.add("shop-image")
    aboutSection.appendChild(shopImg)

    const imgsrc = document.createElement("img")
    imgsrc.src = shopImage;
    shopImg.appendChild(imgsrc)

    const detailsDiv = document.createElement("div");
    detailsDiv.className = "details";

    const locationDiv = document.createElement("div");
    locationDiv.className = "location";
    locationDiv.textContent = "location : Nowhere street 3212312";

    const contactNoDiv = document.createElement("div");
    contactNoDiv.className = "contactno";
    contactNoDiv.textContent = "Contact Number : 932942384203489";

    detailsDiv.appendChild(locationDiv);
    detailsDiv.appendChild(contactNoDiv);

    aboutSection.appendChild(detailsDiv);



}