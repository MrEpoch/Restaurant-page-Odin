import "./style.css";
import * as methods from "./components/methods";

const src = methods.divCreate("", "src");
const navbar = document.createElement("nav");
const content = document.createElement("main");
const footer = document.createElement("footer");

const navMenu = {
  logoContainer: methods.divCreate(methods.logoDefine(), "logo-container"),
  restaurant: methods.h4Create("One Time", "restaurant-name"),
  contact: methods.h4Create("Contact", "contact"),
  menu: methods.h4Create("Menu", "menu"),
};


const text = {
  MainInfo: "We are restaurant with long lasting tradition, we are famous for beautiful place, forest, mountains, rivers are us. For many years we bring best possible to your plates and with good prices, we restaurant One Time are one of most enjoyable things you on your little travelling adventure can have. ",
  timeHeader: "Running hours",
  openingInfo: "",
}

const contentRestaurant = () => {
  const centerInfo = methods.divCreate("", "center-info");
  const timeDiv = methods.divCreate(methods.h2Create(text.timeHeader, "time-header"), "time-div");
  const aboutUs = methods.h2Create(text.MainInfo, "info-content");
  const days = {
    monday:     "Monday:    8am - 6pm",
    tuesday:    "Tuesday:   8am - 6pm",
    wednesday:  "Wednesday: 8am - 6pm",
    thursday:   "Thursday:  8am - 6pm",
    friday:     "Friday:    8am - 7pm",
    saturday:   "Saturday:  8am - 10pm",
    sunday:     "Sunday:    8am - 10pm",
  }
  const dayPara = methods.pCreate(days, "none")
  timeDiv.append(dayPara)
  centerInfo.append(aboutUs, timeDiv)
  console.log(days.friday)
  return { centerInfo };
};


navbar.append(
  navMenu.logoContainer,
  navMenu.restaurant,
  navMenu.contact,
  navMenu.menu,
);
content.append(
  contentRestaurant().centerInfo,
);

src.append(navbar, content, footer);

document.body.appendChild(src);
