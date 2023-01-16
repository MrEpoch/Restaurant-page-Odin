import * as methods from "./methods";
import text from "./text";

export default function aboutRestaurant() {
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
    const post = methods.pCreate(text.MainInfo, "info-content");
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

  centerInfo.append(aboutLoad(), dividingLine, openingTime());
  return centerInfo;
}
