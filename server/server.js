const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        const db = client.db('hotel');
        const bookingsCollection = db.collection('bookings');
        const bookingsRouter = createRouter(bookingsCollection);
        app.use('/api/bookings', bookingsRouter);
    })
    .catch(console.err);

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});



