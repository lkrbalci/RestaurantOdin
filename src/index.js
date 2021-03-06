import { navAdder } from "./navBar";
import { homeAdder } from "./home";  
import { menuAdder } from "./menu";
import { contactAdder } from "./contact";
import { aboutAdder } from "./about";



const contentDiv = document.getElementById("content");
contentDiv.setAttribute("style", "height: 100%; width: 100%; background-image: url('../src/background.jpg'); margin: 0 auto; background-size: cover; overflow: hidden;");

navAdder(contentDiv);
homeAdder(contentDiv);

const toHome = () => {
    contentDiv.removeChild(contentDiv.lastElementChild);
    homeAdder(contentDiv);
}
const toMenu = () => {
    contentDiv.removeChild(contentDiv.lastElementChild);
    menuAdder(contentDiv);
}
const toContact = () => {
    contentDiv.removeChild(contentDiv.lastElementChild);
    contactAdder(contentDiv);
}
const toAbout = () => {
    contentDiv.removeChild(contentDiv.lastElementChild);
    aboutAdder(contentDiv);
}

document.getElementById("home").addEventListener("click", toHome);
document.getElementById("menu").addEventListener("click", toMenu);
document.getElementById("contact").addEventListener("click", toContact);
document.getElementById("about").addEventListener("click", toAbout);


