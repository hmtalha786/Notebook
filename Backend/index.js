const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express();
const port = 5000;

// Express JSON Parser/Handler
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Server Running on Port 3000
app.listen(port, () => {
    console.log(`Notebook app listening at http://localhost:${port}`)
})