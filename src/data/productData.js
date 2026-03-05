import AsheReshteh1 from "../assets/Images/2.Dishes/Ashe Reshteh 1.png";
import AsheAnar1 from "../assets/Images/2.Dishes/Ashe Anar 1.png";
import AsheDoogh1 from "../assets/Images/2.Dishes/Ashe Doogh 1.png";
import Abhgoosht from "../assets/Images/2.Dishes/Abgoosht.png";
import Halim from "../assets/Images/2.Dishes/Halim.png";
// this file contains the data for the products, which will be used to populate the product sections on the ProductsPage. 
// Each category (starters, mains, desserts) has an array of product dishes, each with an id, title, price, and image.
export const productData = {
  soups: [
    { id: 101, title: "Ashe Reshteh", price: "62.50", ratingnum: "4.5", image: AsheReshteh1 },
    { id: 102, title: "Ashe Anar", price: "15", ratingnum: "4.5", image: AsheAnar1 },
    { id: 103, title: "Ashe Doogh", price: "18", ratingnum: "4.5", image: AsheDoogh1 },
    { id: 104, title: "Abhgoosht", price: "15", ratingnum: "4.5", image: Abhgoosht },
    { id: 105, title: "Halim-e-jo", price: "12", ratingnum: "4.5", image: Halim },
  ],
  desserts: [
    { id: 201, title: "Ribeye Steak", price: "32", ratingnum: "4.5", image: "/img/main1.jpg" },
    { id: 202, title: "Wild Salmon", price: "28", ratingnum: "4.5", image: "/img/main2.jpg" },
  ],
  waffles: [
    { id: 301, title: "Tiramisu", price: "10", ratingnum: "4.5", image: "/img/sweet1.jpg" },
    { id: 302, title: "Cheesecake", price: "9", ratingnum: "4.5", image: "/img/sweet2.jpg" },
  ],
  sidedishes: [
    { id: 401, title: "Caesar Salad", price: "8", ratingnum: "4.5", image: "/img/side1.jpg" },
    { id: 402, title: "Garlic Bread", price: "5", ratingnum: "4.5", image: "/img/side2.jpg" },
  ]
};