import {
  addproduct,
  home,
  order,
  products,
  profile,
  review,
  //   cart,
  transitions,
  users,
} from "../assets";

export const sideNavLinks = [
  {
    id: "dashboard",
    title: "Dashboard",
    img: home,
  },

  {
    id: "products",
    title: "Products",
    img: products,
  },
  {
    id: "addproduct",
    title: "Add Product",
    img: addproduct,
  },
  {
    id: "orders",
    title: "Orders",
    img: order,
  },
  {
    id: "users",
    title: "Users",
    img: users,
  },

  {
    id: "transactions",
    title: "Transactions",
    img: transitions,
  },
  {
    id: "reviews",
    title: "Reviews",
    img: review,
  },
];

export const profileInfo = {
  name: "Jhon",
  profileImg: profile,
};

export const salesData = [
  {
    name: "",
    sales: 0,
  },

  {
    name: "January",
    sales: 30,
  },
  {
    name: "Fabuary",
    sales: 100,
  },
  {
    name: "March",
    sales: 500,
  },
  {
    name: "April",
    sales: 390,
  },
  {
    name: "May",

    sales: 480,
  },
  {
    name: "June",

    sales: 380,
  },
];

export const newUsersData = [
  { name: "January", newUsers: 15 },
  { name: "Fabuary", newUsers: 25 },
  { name: "March", newUsers: 20 },
  { name: "April", newUsers: 50 },
  { name: "May", newUsers: 65 },
  { name: "June", newUsers: 29 },
];
