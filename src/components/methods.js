import logo from "./images/One-Time.png";
import "../style.css";

const divCreate = (InsideDiv, classAdd) => {
  const div = document.createElement("div");
  div.append(InsideDiv);
  div.classList.add(classAdd);
  return div;
};

const logoDefine = () => {
  const img = new Image();
  img.src = logo;
  return img;
};

const h4Create = (TextInside, classAdd) => {
  const h4 = document.createElement("h4");
  h4.textContent = TextInside;
  h4.classList.add(classAdd);
  return h4;
};

export { divCreate, logoDefine, h4Create };