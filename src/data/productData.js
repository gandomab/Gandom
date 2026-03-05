import AsheReshteh1 from "../assets/Images/2.Dishes/Ashe Reshteh 1.png";
// this file contains the data for the products, which will be used to populate the product sections on the ProductsPage. 
// Each category (starters, mains, desserts) has an array of product dishes, each with an id, title, price, and image.
export const productData = {
  Soups: [
    { id: 101, title: "Ashe Reshteh", price: "62.50", image: AsheReshteh1 },
    { id: 102, title: "Calamari", price: "15", image: "/img/starter2.jpg" },
    { id: 103, title: "Mushroom Risotto", price: "18", image: "/img/starter3.jpg" },
    { id: 104, title: "Calamari", price: "15", image: "/img/starter2.jpg" },
  ],
  mains: [
    { id: 201, title: "Ribeye Steak", price: "32", image: "/img/main1.jpg" },
    { id: 202, title: "Wild Salmon", price: "28", image: "/img/main2.jpg" },
  ],
  desserts: [
    { id: 301, title: "Tiramisu", price: "10", image: "/img/sweet1.jpg" },
    { id: 302, title: "Cheesecake", price: "9", image: "/img/sweet2.jpg" },
  ]
};