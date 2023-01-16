import * as methods from "./methods";
import steakImg from "./images/steak.jpg";
import porkImg from "./images/pork.jpg";
import soupImg from "./images/soup.jpg";
import riceImg from "./images/rice.jpg";
import beerImg from "./images/beer.jpg";
import wineImg from "./images/wine.jpg";
import chickenImg from "./images/chicken.jpg"

export default function foodCreate() {
  const steak = methods.ImgCreate(steakImg);
  const pork = methods.ImgCreate(porkImg);
  const soup = methods.ImgCreate(soupImg);
  const rice = methods.ImgCreate(riceImg);
  const beer = methods.ImgCreate(beerImg);
  const wine = methods.ImgCreate(wineImg);
  const chicken = methods.ImgCreate(chickenImg)
  return { steak, pork, soup, rice, beer, wine, chicken };
}
