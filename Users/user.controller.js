import fs from "fs";
const users = JSON.parse(fs.readFileSync("./Users/users.json", "utf-8"));

export const getAllUsers = (req, res) => {
  res.json({Users:users });
};

export const getUserByID = (req, res) => {
  let { id } = req.params;
  let userIndex = users.findIndex((user) => user.id == id);
  if (userIndex >= 0) {
    res.json(users[userIndex]);
  } else {
    res.json({ message: "user not found" });
  }
};

export const getUserByName = (req, res) => {
  let { name } = req.query;
  let userIndex = users.findIndex((user) => user.name == name);
  if (userIndex >= 0) {
    res.json({ message: "user found", User: users[userIndex] });
  } else {
    res.json({ message: "user not found" });
  }
};

export const addUser = (req, res) => {
  let { name, email, age, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ message: "All fields are required" });
  }
  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ message: "Email already exists." });
  } else {
    users.push({ id: users.length + 1, name, email, age });
    fs.writeFileSync("./Users/users.json", JSON.stringify(users));
    res.json(users);
  }
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const userIndex = users.findIndex((user) => user.id == id);

  if (userIndex === -1) {
    res.status(404).json({ message: "User not found" });
  } else {
    users[userIndex] = { ...users[userIndex], ...updatedData };
    fs.writeFileSync("./Users/users.json", JSON.stringify(users));
    res.json({ message: "User updated", user: users[userIndex] });
  }
};

export const deleteUser = (req, res) => {
  let { id } = req.params;
  if (id) {
    const userIndex = users.findIndex((user) => user.id == id);
    if (userIndex >= 0) {
      users.splice(userIndex, 1);
      fs.writeFileSync("./Users/users.json", JSON.stringify(users));
      res.json({ message: "User deleted", users });
    } else {
      res.json({ message: "User not found" });
    }
  } else {
    let { id } = req.body;
    let parsedId = parseInt(id, 10);
    const userIndex = users.findIndex((user) => user.id == parsedId);
    if (userIndex >= 0) {
      users.splice(userIndex, 1);
      fs.writeFileSync("./Users/users.json", JSON.stringify(users));
      res.json({ message: "User deleted", users });
    } else {
      res.json({ message: "User not found" });
    }
  }
};
