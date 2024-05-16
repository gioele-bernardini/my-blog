require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const PORT = 5000 || process.env.PORT;
// Uso la 5000 O la default su server

// Public folder for shared code (e.g. js, css code)
app.use(express.static('public'));

// Templating engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// To avoid implementing routes into app.js - pretty messy
app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

