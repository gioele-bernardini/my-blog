// File for implementing routes, then imported in app.js

const express = require('express');

const router = express.Router();

// Routes
router.get('', (req, res) => {
    const locals = {
        title : "NodeJs Blog",
        description : "Simple Blog created with NodeJs, Express & MongoDb"
    }    

    // res.send('Hello, World!');
    // Nuova soluzione, utilizza la funzione di rendering tramite index.ejs
    // Posso cosi' renderizzare pagine completamente diverse!
    // * res.render('index');
    
    // Versione migliorata rispetto a prima:
    // * Restituisce multipli oggetti!
    // * placeholder nel nome del documento di riferimento (qui index.ejs)
    res.render('index', { locals });
});

router.get('/About', (req, res) => {
    res.render('about');
})

module.exports = router;

