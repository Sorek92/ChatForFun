// Main server file


const http = require('http');
const express = require('express');

// Layouts ejs engine
const expressLayouts = require('express-ejs-layouts');


const app = express();
const server = http.createServer(app);




// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Load all public elements
app.use(express.static(__dirname + '/public'));

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


const PORT = 3000 || process.env.PORT;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));






