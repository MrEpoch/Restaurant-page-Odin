import "./style.css";
import logo from "./components/images/One-Time.png"

const logoDefine = () => {
  const img = new Image()
  img.src = logo;
  return img;
}

const def = document.createElement("h4");
def.innerHTML = "One Time"
const src = document.createElement('div');
const navbar = document.createElement('nav');
const navMenu = {
  logoContainer: (document.createElement('div')).appendChild(logoDefine()),
  name: def,
  about: document.createElement('h4').innerHTML = "ABOUT US",
  menu: document.createElement('h4').innerHTML = "MENU",
};

navMenu.logoContainer.classList.add("logo-container")

navbar.append(navMenu.logoContainer, navMenu.name);


document.body.appendChild(navbar);