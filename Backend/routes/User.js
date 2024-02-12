const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require("../models/user");

// Route for handling user registration
router.post('/register', async (req, res) => {
  try {
    // Fetching values from the request body
    const {
      username,
      password
    } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Hashing with a salt round of 10

    // Create a new user instance with the hashed password
    const newUser = new User({
        username,
        password: hashedPassword, // Store the hashed password
    });

    // Save the user to the database
    await newUser.save();

     // Respond with a success message
     return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      // Handle any errors
      return res.status(500).json({ error: 'Registration failed' });
    }
  });

  //handle forlogin 
  router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Check if the user exists in the database
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // Compare the password using bcrypt or any secure comparison method
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // If the user and password are valid, simply return a success message
      return res.status(200).json({ message: 'Login successful',user });
    } catch (error) {
      console.error('Login error', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  module.exports = router;