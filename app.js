const express = require('express');
const mongoose = require('mongoose');
const sampleRouter = require('./routes/sample');

const app = express();
const PORT = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));

// Middleware to parse JSON
app.use(express.json());

// Use the sample router
app.use('/sample', sampleRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
