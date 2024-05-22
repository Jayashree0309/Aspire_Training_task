const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("mydatabase");
        const collection = database.collection("mycollection");

        // Delete a single document
        const query = { name: "Alice" };
        const result = await collection.deleteOne(query);
        console.log("Deleted documents:", result.deletedCount);

        // Delete multiple documents
        const multipleQuery = { age: { $gt: 25 } };
        const resultMany = await collection.deleteMany(multipleQuery);
        console.log("Deleted documents:", resultMany.deletedCount);

        // Deleteall documents in the collection
const resultAll = await collection.deleteMany({});
console.log("Deleted all documents:", resultAll.deletedCount);
} finally {
await client.close();
}
}

main().catch(console.error);
