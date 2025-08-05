require('dotenv').config();

// The MongoClient will be required to connect
const MongoClient = require("mongodb").MongoClient;

// Specify the URL of the MongoDB
const dbUrl = process.env.DB_PATH;

console.log(dbUrl);

let database;

const databaseName = "Fullstack Web Mastery";

// Connect to the appropriate URL
// Once connected, take in an error and the client
MongoClient.connect(dbUrl, (error, client) => {

    // If there's an error, stop processing and return the error
    if (error) return console.log(error);

    // Pull the data from the database
    database = client.db(databaseName);
    console.log(`database: ${databaseName}`);
    console.log(`DB URL: ${dbUrl}`);
});