const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://arashaltafinahad:x9lgUpaYFBg57TSd@cluster0.dxai2re.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const connectToMongo = async () => {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error('Error occurred while connecting to MongoDB', error.message);
        throw error;
    } finally {
        await client.close();
    }
}

module.exports = connectToMongo;
