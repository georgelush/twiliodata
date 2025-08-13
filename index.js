const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pentru a permite parsarea JSON
app.use(express.json());

let stocareNumar = null; // Variabilă pentru a stoca numărul

// Endpoint pentru a stoca un număr
app.post('/numar', (req, res) => {
    const { numar } = req.body; // Preia numărul din cererea POST
    if (typeof numar === 'number') {
        stocareNumar = numar; // Stochează numărul
        return res.status(200).json({ message: 'Numărul a fost stocat cu succes!' });
    }
    return res.status(400).json({ message: 'Te rog să trimiți un număr valid!' });
});

// Endpoint pentru a obține numărul
app.get('/numar', (req, res) => {
    if (stocareNumar !== null) {
        return res.status(200).json({ numar: stocareNumar }); // Returnează numărul stocat
    }
    return res.status(404).json({ message: 'Numărul nu a fost găsit!' });
});

// Pornirea serverului
app.listen(PORT, () => {
    console.log(`Serverul rulează pe portul ${PORT}`);
});