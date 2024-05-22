const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("mydatabase");
        const collection = database.collection("mycollection");

        // Update a single document
        const query = { name: "Alice" };
        const update = { $set: { age: 26 } };
        const result = await collection.updateOne(query, update);
        console.log("Matched documents:", result.matchedCount);
        console.log("Modified documents:", result.modifiedCount);

        // Update multiple documents
        const multipleQuery = { age: { $gt: 25 } };
        const multipleUpdate = { $set: { city: "Unknown" } };
        const resultMany = await collection.updateMany(multipleQuery, multipleUpdate);
        console.log("Matched documents:", resultMany.matchedCount);
        console.log("Modified documents:", resultMany.modifiedCount);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
