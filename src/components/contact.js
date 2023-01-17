import * as methods from "./methods";
import text from "./text";

export default function contactRest() {
  const centerInfo = methods.divCreate("", "center-info");
  const contactInfo = methods.divCreate("", "contact-info");
  const name = methods.h2Create(text.contName, "cont-name");
  const number = methods.h2Create(text.contNum, "number");
  const email = methods.h2Create(text.contEmail, "email");
  contactInfo.append(name, number, email);
  centerInfo.append(contactInfo);

  return centerInfo;
}
