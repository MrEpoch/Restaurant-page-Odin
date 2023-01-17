import * as methods from "./methods";
import text from "./text";
import food from "./food-images";

export default function menuRestaurant() {
  const centerInfo = methods.divCreate("", "center-info");
  function OneCard(foodname, pictureLocation, description) {
    this.foodName = foodname;
    this.pictureLocation = pictureLocation;
    this.description = description;
    this.card = function () {
      const wholeCard = methods.divCreate("", "card");
      wholeCard.append(
        methods.h2Create(foodname, "h3-card"),
        methods.divCreate(pictureLocation, "img-card"),
        methods.pCreate(description, "card-desc")
      );
      return wholeCard;
    };
  }
  const steak = new OneCard("Steak on butter", food().steak, text.steak);
  const soup = new OneCard("Tomato soup", food().soup, text.soup);
  const chicken = new OneCard(
    "Fresh chicken with salad",
    food().chicken,
    text.chicken
  );
  const pork = new OneCard("Pork with pepper sauce", food().pork, text.pork);
  const rice = new OneCard("Asien special rice", food().rice, text.rice);
  const wine = new OneCard("Red wine", food().wine, text.wine);
  const beer = new OneCard("Traditional beer", food().beer, text.beer);
  centerInfo.append(
    steak.card(),
    soup.card(),
    chicken.card(),
    pork.card(),
    rice.card(),
    wine.card(),
    beer.card()
  );
  return centerInfo;
}
