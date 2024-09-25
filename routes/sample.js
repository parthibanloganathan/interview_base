const express = require('express');
const router = express.Router();
const Sample = require('../models/sample');

// POST /sample - Insert "Hello World" into the MongoDB collection
router.post('/', async (req, res) => {
    try {
        // Create a new Sample document with "Hello World"
        const sampleDoc = new Sample({ message: 'Hello World' });

        // Save to MongoDB
        const result = await sampleDoc.save();

        // Return the inserted document
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ error: 'Failed to insert data into MongoDB' });
    }
});

module.exports = router;
