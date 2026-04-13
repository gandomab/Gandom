import AsheReshteh1 from "../assets/Images/2.Dishes/Ashe Reshteh 1.png";
import AsheAnar1 from "../assets/Images/2.Dishes/Ashe Anar 1.png";
import AsheDoogh1 from "../assets/Images/2.Dishes/Ashe Doogh 1.png";
import Abhgoosht from "../assets/Images/2.Dishes/Abgoosht1.png";
import Halim from "../assets/Images/2.Dishes/Halim.png";
import SholeZard1 from "../assets/Images/2.Dishes/Shole Zard 1.png";
import SoyWaffle from "../assets/Images/2.Dishes/Soy Waffle.png";
import VegetarianHerb from "../assets/Images/2.Dishes/Waffle - Vegetarian Herb.png";
import HerbalDelightWaffle from "../assets/Images/2.Dishes/Waffle - Herbal Delight.png";
import WaffleBeetroot from "../assets/Images/2.Dishes/Waffle - Beetroot.png";
import WaffleCarrot from "../assets/Images/2.Dishes/Waffle - Carrots.png";
import WaffleMatcha from "../assets/Images/2.Dishes/Waffle - Matcha.png";
import FermentedLemon from "../assets/Images/2.Dishes/Fermented Lemon.png";
import HerbedMarinatedOlives from "../assets/Images/2.Dishes/sidedish2.png";
import CustomFermentedVegetables from "../assets/Images/2.Dishes/sidedish3.png";
import MenuBox from "../assets/Images/2.Dishes/Menu Box.png";

// this file contains the data for the products, which will be used to populate the product sections on the ProductsPage. 
// Each category (starters, mains, desserts) has an array of product dishes, each with an id, title, price, and image.
export const productData = {
  soups: [
    {
      id: 101, title: "Ashe Reshteh", price: "62.50", ratingnum: "4.5", image: AsheReshteh1, hoverimage: MenuBox,
      customizations: [
        { label: "Garlic", id: "garlic" },
        { label: "Onion", id: "onion" },
        { label: "Lactose Free", id: "lactose" }
      ]
    },
    { id: 102, title: "Ashe Anar", price: "15", ratingnum: "3.5", image: AsheAnar1, hoverimage: MenuBox },
    { id: 103, title: "Ashe Doogh", price: "18", ratingnum: "5", image: AsheDoogh1, hoverimage: MenuBox },
    { id: 104, title: "Abhgoosht", price: "15", ratingnum: "4.2", image: Abhgoosht, hoverimage: MenuBox },
    { id: 105, title: "Halim", price: "12", ratingnum: "3.1", image: Halim, hoverimage: MenuBox },
  ],
  desserts: [
    { id: 201, title: "Shole Zard", price: "32", ratingnum: "4.5", image: SholeZard1, hoverimage: MenuBox },
  ],
  waffles: [
    { id: 301, title: "Soy Waffle", price: "10", ratingnum: "4.5", image: SoyWaffle, hoverimage: MenuBox },
    { id: 302, title: "Vegetarian Herb Waffle", price: "9", ratingnum: "4.5", image: VegetarianHerb, hoverimage: MenuBox },
    { id: 303, title: "Herbal Delight Waffle", price: "11", ratingnum: "4.5", image: HerbalDelightWaffle, hoverimage: MenuBox },
    { id: 304, title: "Beetroot Waffle", price: "8", ratingnum: "4.5", image: WaffleBeetroot, hoverimage: MenuBox },
    { id: 305, title: "Carrot Waffle", price: "7", ratingnum: "4.5", image: WaffleCarrot, hoverimage: MenuBox },
    { id: 306, title: "Matcha Waffle", price: "6", ratingnum: "4.5", image: WaffleMatcha, hoverimage: MenuBox },
  ],
  sideDishes: [
    { id: 401, title: "Fermented Lemon", price: "8", ratingnum: "4.5", image: FermentedLemon, hoverimage: MenuBox },
    { id: 402, title: "Herbed Marinated Olives", price: "5", ratingnum: "4.5", image: HerbedMarinatedOlives, hoverimage: MenuBox },
    { id: 403, title: "Custom Fermented Vegetables", price: "6", ratingnum: "4.5", image: CustomFermentedVegetables, hoverimage: MenuBox },
  ]
};