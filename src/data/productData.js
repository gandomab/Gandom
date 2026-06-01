import AsheReshteh1 from "../assets/Images/2.Dishes/Ashe Reshteh 1.png";
import AsheReshteh2 from "../assets/Images/2.Dishes/Foodora - Ashe Reshteh.png";
import AsheReshteh3 from "../assets/Images/2.Dishes/Ashe Reshteh.png";
import AsheReshteh4 from "../assets/Images/2.Dishes/Menu - Ashe Reshteh.png";
import AsheAnar1 from "../assets/Images/2.Dishes/Ashe Anar 1.png";
import AsheAnar2 from "../assets/Images/2.Dishes/Foodora - Ashe Anar.png";
import AsheAnar3 from "../assets/Images/2.Dishes/Menu - Ashe Anar.png";
import AsheAnar4 from "../assets/Images/2.Dishes/AsheAnar4.jpg";
import AsheAnar5 from "../assets/Images/2.Dishes/AsheAnar5.png";
import AsheDoogh1 from "../assets/Images/2.Dishes/Ashe Doogh 1.png";
import AsheDoogh2 from "../assets/Images/2.Dishes/Foodora - Ashe Doogh.png";
import AsheDoogh3 from "../assets/Images/2.Dishes/Menu - Ashe Doogh.png";
import Abhgoosht from "../assets/Images/2.Dishes/Abgoosht1.png";
import Abhgoosht2 from "../assets/Images/2.Dishes/Foodora - Abhgoosht.png";
import Abhgoosht3 from "../assets/Images/2.Dishes/Menu - Abhgoosht.png";
import Halim from "../assets/Images/2.Dishes/Halim.png";
import SholeZard1 from "../assets/Images/2.Dishes/Shole Zard 1.png";
import SoyWaffle from "../assets/Images/2.Dishes/Soy Waffle.png";
import SoyWaffle2 from "../assets/Images/2.Dishes/Soy Waffle 2.png";
import VegetarianHerb from "../assets/Images/2.Dishes/Waffle - Vegetarian Herb.png";
import HerbalDelightWaffle from "../assets/Images/2.Dishes/Waffle - Herbal Delight.png";
import WaffleBeetroot from "../assets/Images/2.Dishes/Waffle - Beetroot.png";
import WaffleCarrot from "../assets/Images/2.Dishes/Waffle - Carrots.png";
import WaffleMatcha from "../assets/Images/2.Dishes/Waffle - Matcha.png";
import FermentedLemon from "../assets/Images/2.Dishes/Fermented Lemon.png";
import FermentedLemon2 from "../assets/Images/2.Dishes/Kitchen Lemon with Honey.png";
import HerbedMarinatedOlives from "../assets/Images/2.Dishes/sidedish2.png";
import HerbedMarinatedOlives2 from "../assets/Images/2.Dishes/Kitchen Herbed.png";
import CustomFermentedVegetables from "../assets/Images/2.Dishes/sidedish3.png";
import CustomFermentedVegetables2 from "../assets/Images/2.Dishes/FermentedVegetables - 2.png";
import CustomFermentedVegetables3 from "../assets/Images/2.Dishes/FermentedVegetables - 3.png";
import MenuBox from "../assets/Images/2.Dishes/Menu Box.png";

// this file contains the data for the products, which will be used to populate the product sections on the ProductsPage. 
// Each category (starters, mains, desserts) has an array of product dishes, each with an id, title, price, and image.
export const productData = {
  soups: [
    {
      id: 101,
      title: "Ashe Reshteh",
      price: "62.50",
      ratingnum: "4.5",
      images: [AsheReshteh1, AsheReshteh2, AsheReshteh3, AsheReshteh4],
      hoverimage: MenuBox,
      customizations: [
        { label: "Garlic", id: "garlic" },
        { label: "Onion", id: "onion" },
        { label: "Lactose Free", id: "lactose" }
      ]
    },
    {
      id: 102,
      title: "Ashe Anar",
      price: "15",
      ratingnum: "3.5",
      images: [AsheAnar1, AsheAnar2, AsheAnar3, AsheAnar4, AsheAnar5],
      hoverimage: MenuBox,
      customizations: [
        { label: "Vegetarian", id: "vegetarian" },
        { label: "Onion", id: "onion" }
      ]
    },
    {
      id: 103,
      title: "Ashe Doogh",
      price: "18",
      ratingnum: "5",
      images: [AsheDoogh1, AsheDoogh2, AsheDoogh3],
      hoverimage: MenuBox,
      customizations: [
        { label: "Lactose Free", id: "lactose" }
      ]
    },
    {
      id: 104,
      title: "Abhgoosht",
      price: "15",
      ratingnum: "4.2",
      images: [Abhgoosht, Abhgoosht2, Abhgoosht3],
      hoverimage: MenuBox
    },
    {
      id: 105,
      title: "Halim",
      price: "12",
      ratingnum: "3.1",
      images: [Halim],
      hoverimage: MenuBox
    },
  ],
  desserts: [
    {
      id: 201,
      title: "Shole Zard",
      price: "32",
      ratingnum: "4.5",
      images: [SholeZard1],
      hoverimage: MenuBox,
      customizations: [
        { label: "Vegan Version", id: "vegan" }
      ]
    },
  ],
  waffles: [
    {
      id: 301,
      title: "Soy Waffle",
      price: "10",
      ratingnum: "4.5",
      images: [SoyWaffle, SoyWaffle2],
      hoverimage: MenuBox,
    },
    {
      id: 302,
      title: "Vegetarian Herb Waffle",
      price: "9",
      ratingnum: "4.5",
      images: [VegetarianHerb],
      hoverimage: MenuBox
    },
    {
      id: 303,
      title: "Herbal Delight Waffle",
      price: "11",
      ratingnum: "4.5",
      images: [HerbalDelightWaffle],
      hoverimage: MenuBox
    },
    {
      id: 304,
      title: "Beetroot Waffle",
      price: "8",
      ratingnum: "4.5",
      images: [WaffleBeetroot],
      hoverimage: MenuBox
    },
    {
      id: 305,
      title: "Carrot Waffle",
      price: "7",
      ratingnum: "4.5",
      images: [WaffleCarrot],
      hoverimage: MenuBox
    },
    {
      id: 306,
      title: "Matcha Waffle",
      price: "6",
      ratingnum: "4.5",
      images: [WaffleMatcha],
      hoverimage: MenuBox
    },
  ],
  sideDishes: [
    {
      id: 401,
      title: "Fermented Lemon",
      price: "8",
      ratingnum: "4.5",
      images: [FermentedLemon, FermentedLemon2],
      hoverimage: MenuBox
    },
    {
      id: 402,
      title: "Herbed Marinated Olives",
      price: "5",
      ratingnum: "4.5",
      images: [HerbedMarinatedOlives, HerbedMarinatedOlives2],
      hoverimage: MenuBox
    },
    {
      id: 403,
      title: "Custom Fermented Vegetables",
      price: "6",
      ratingnum: "4.5",
      images: [CustomFermentedVegetables, CustomFermentedVegetables2, CustomFermentedVegetables3],
      hoverimage: MenuBox
    },
  ]
};