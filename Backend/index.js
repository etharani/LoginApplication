const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 8088;
const user = require("./routes/User");

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://tharani2297:tharu%404411@tharu.jikk6hd.mongodb.net/Login')
  .then(() => {
    console.log('Successful MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error', err);
  });

  app.use(user);
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});