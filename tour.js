// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Body parser middleware to parse POST request bodies
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files from the "public" directory
app.use(express.static('public'));

// Route for the root ("/") - Render sign-up page
app.get('/', (req, res) => {
  res.render('signup.ejs');
});


// POST route for sign-up form submission
app.post('/', (req, res) => {
  // Process sign-up form data here
  const { firstName, lastName, email, password, confirmPassword, dob, phone, address, city, country } = req.body;
  // Validate data, save to database, etc.

  // Redirect to the index page after sign-up
  
  res.sendFile(path.join(__dirname,  'index.html'));
});


// Define a route to handle incoming requests

/*
app.post('/deliver', (req, res) => {
  res.send('Your message has been delivered successfully');
}); */


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});