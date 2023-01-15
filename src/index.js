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
  MainInfo:
    "We are restaurant with long lasting tradition, we are famous for beautiful place, forest, mountains, rivers are us. For many years we bring best possible to your plates and with good prices, we restaurant One Time are one of most enjoyable things you on your little travelling adventure can have. ",
  timeHeader: "Running hours",
  place: "You can find us at ...",
  placeText: "123 NoPlace street TotallyRealPlace",
};

const contentRestaurant = () => {
  const centerInfo = methods.divCreate("", "center-info");
  const aboutUs = methods.divCreate(
    methods.h2Create("One Time", "h2-info-content"),
    "about-container"
  );
  const dividingLine = methods.divCreate("", "dividing-line");
  const timeDiv = methods.divCreate(
    methods.h2Create(text.timeHeader, "time-h2"),
    "time-container"
  );

  const aboutLoad = () => {
    const post = methods.pCreate(text.MainInfo, "info-content")
    aboutUs.append(post);
    return aboutUs;
  };
  const openingTime = () => {
    const days = () => {
      const monday = methods.pCreate("   Monday:    8am - 6pm", "monday");
      const tuesday = methods.pCreate("  Tuesday:   8am - 6pm", "tuesday");
      const wednesday = methods.pCreate("Wednesday: 8am - 6pm", "wednesday");
      const thursday = methods.pCreate(" Thursday:  8am - 6pm", "thursday");
      const friday = methods.pCreate("   Friday:    8am - 7pm", "friday");
      const saturday = methods.pCreate(" Saturday:  8am - 10pm", "sunday");
      const sunday = methods.pCreate("   Sunday:    8am - 10pm", "saturday");

      return [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
    };
    for (let assign = 0; assign < 7; assign += 1) {
      timeDiv.append(days()[assign]);
    }
    return timeDiv;
  };

  centerInfo.append(aboutLoad(), dividingLine,openingTime());
  return { centerInfo };
};

const footerRestaurant = () => {
  const footerContent = methods.divCreate("", "footer-content");
  const place = methods.divCreate(
    methods.h2Create(text.place, "place-h2"),
    "place-container"
  );
  const placeLoad = () => {
    place.append(methods.pCreate(text.placeText, "text-place"));

    return place;
  };

  footerContent.append(placeLoad());

  return footerContent;
}

navbar.append(
  navMenu.logoContainer,
  navMenu.restaurant,
  navMenu.contact,
  navMenu.menu
);
content.append(contentRestaurant().centerInfo);
footer.append(footerRestaurant())

src.append(navbar, content, footer);

document.body.appendChild(src);
