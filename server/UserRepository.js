const bcrypt = require("bcrypt");

const users = [
  {
    name: "Andrzej2",
    password: "$2b$10$96sk/L2XNNLuwi1iWTIcSOv42ArgH.IhYfTAOJsqt.MvYQydlVUW."
  }
];

const loginUser = async (name, password) => {
    const user = users.find(user => user.name === name);
    if (!user) {
      return [null, "cannot find user"];
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return [null, "invalid password"];

    return [user, null]
}

const registerUser = async (name, password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = {
      name,
      password: hashedPassword
    };
    
    users.push(user);
    
    return user;
}

module.exports = {
    loginUser,
    registerUser
}