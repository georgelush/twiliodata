const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());

let dasNumber = null; // Var for das

// Endpoint for save Das
app.post('/postDas', (req, res) => {
    const { Das } = req.body; // get from body
    if (typeof Das === 'number') {
        dasNumber = Das; // save number
        return res.status(200).json({ message: 'Succes dass add Dass' });
    }
    return res.status(400).json({ message: 'Invalid number' });
});

// Endpoint for get Das
app.get('/getDas', (req, res) => {
    if (dasNumber !== null) {
        return res.status(200).json({ Das: dasNumber }); // Returning Das
    }
    return res.status(404).json({ message: 'Das not exist' });
});

// Server start
app.listen(PORT, () => {
    console.log(`Server is runing on ${PORT}`);
});
