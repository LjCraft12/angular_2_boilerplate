//  Export the database to be used in the server.js file

// Change db variable to create other databases
const db = 'skeleton';

module.exports = {
    database: 'mongodb://localhost:27017/' +db,
    secret: "CBAB340E4E",
    name: db
};