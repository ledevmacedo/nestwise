import { MongoClient, ServerApiVersion } from "mongodb"

const uri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@nestwise.gu0mjpm.mongodb.net/?retryWrites=true&w=majority&appName=nestwise`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


export { client }