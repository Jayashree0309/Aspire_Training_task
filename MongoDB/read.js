const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("mydatabase");
        const collection = database.collection("mycollection");

        // Find one document
        const document = await collection.findOne({ name: "Alice" });
        console.log("Found document:", document);

        // Find multiple documents
        const documents = await collection.find({ age: { $gt: 25 } }).toArray();
        console.log("Found documents:");
        documents.forEach(doc => console.log(doc));

        // Find all documents
        const allDocuments = await collection.find().toArray();
        console.log("All documents:");
        allDocuments.forEach(doc => console.log(doc));
    } finally {
        await client.close();
    }
}

main().catch(console.error);
