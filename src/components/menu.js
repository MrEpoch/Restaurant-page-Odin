import * as methods from "./methods"
import text from "./text"

export default function menuRestaurant() {
  const centerInfo = methods.divCreate("", "center-info");
  function OneCard(foodname, pictureLocation, description) { 
    this.foodName = foodname;
    this.pictureLocation = pictureLocation;
    this.description = description;
    this.card = function() {
      const wholeCard = methods.divCreate("", "card");
      wholeCard.append(methods.h2Create(foodname, "h3-card"), methods.divCreate(pictureLocation, "img-card"), methods.pCreate(description, "card-desc"));
      return wholeCard;
    }};
  const steak = new OneCard("steak", "none", text.steak);
  const soup = new OneCard("soup", "none", text.soup);
  const chicken = new OneCard("steak", "none", text.chicken);
  const pork = new OneCard("steak", "none", text.pork);
  const rice = new OneCard("steak", "none", text.rice);
  const wine = new OneCard("steak", "none", text.wine);
  const beer = new OneCard("steak", "none", text.beer);
  centerInfo.append(steak.card(), soup.card(), chicken.card(), pork.card(), rice.card(), wine.card(), beer.card());
  return centerInfo;
}