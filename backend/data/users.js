import bcrypt from "bcryptjs";

const users = [
  {
    name: "Dorjan Cocka",
    email: "drhcodex@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Do",
    email: "johndo@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ela Dodi",
    email: "eladodi@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
];

export default users;
