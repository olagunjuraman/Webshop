import bcrypt from "bcryptjs";
const user = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default user;
