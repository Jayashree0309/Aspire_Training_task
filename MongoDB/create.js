const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("mydatabase");
        const collection = database.collection("mycollection");

        // Insert a single document
        const document = { name: "Alice", age: 25, city: "New York" };
        const result = await collection.insertOne(document);
        console.log("Inserted document ID:", result.insertedId);

        // Insert multiple documents
        const documents = [
            { name: "Bob", age: 30, city: "Chicago" },
            { name: "Charlie", age: 35, city: "San Francisco" }
        ];
        const resultMany = await collection.insertMany(documents);
        console.log("Inserted document IDs:", resultMany.insertedIds);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
