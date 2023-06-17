const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

// Register user
exports.register = (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  // Check if the email is already registered
  User.getByEmail(email, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }

    if (result) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
      }

      // Create a new user
      const newUser = new User({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        role: "user", // Set the default role as 'user'
      });

      // Save the user to the database
      User.create(newUser, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Internal server error" });
        }

        res.status(201).json({ message: "User registered successfully" });
      });
    });
  });
};

// Login user
exports.login = (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  User.getByEmail(email, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
      }

      if (!result) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Create and sign a JSON Web Token (JWT)
      const token = jwt.sign(
        { userId: user.id, role: user.role },
        "your_secret_key",
        { expiresIn: "1h" }
      );

      res.status(200).json({ token });
    });
  });
};
