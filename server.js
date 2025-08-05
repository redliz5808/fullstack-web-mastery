require("dotenv").config();

// The MongoClient will be required to connect
const MongoClient = require("mongodb").MongoClient;

// Specify the URL of the MongoDB
const dbUrl = process.env.DB_PATH;

// Indicate which URL MongoClient should use
const client = new MongoClient(dbUrl);

// List of items to add
const newData = [
    {
        insertOne: {
            document: {
                Name: "Gus",
                Age: 11,
            },
        },
    },
    {
        insertOne: {
            document: {
                Name: "Lily",
                Age: 7,
            },
        },
    },
    {
        insertOne: {
            document: {
                Name: "Hudson",
                Age: 6,
            },
        },
    },
];

// Create a function to access the DB
let MyApp = async () => {
    try {
        await client.connect();
        // Set the database (Project) name
        const database = client.db("fullstack-web-mastery");
        // Set the collection (Cluster) name
        const allData = database.collection("fwm-data");

        const queriedData = await allData;
        console.log({ queriedData });

        let insertedData = await allData.bulkWrite(newData);
        const updatedData = await allData.find({}).toArray();
        console.log(updatedData);
    } catch (error) {
        console.log({ error });
    } finally {
        client.close();
    }
};

MyApp();

// let database;

// // Connect to the appropriate URL
// // Once connected, take in an error and the client
// MongoClient.connect(dbUrl, (error, client) => {

//     // If there's an error, stop processing and return the error
//     if (error) return console.log(error);

//     // Pull the data from the database
//     database = client.db(databaseName);
//     console.log(`database: ${databaseName}`);
//     console.log(`DB URL: ${dbUrl}`);
// });
