const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DB_URL;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();

    const categoriesCollection = client.db("pcbazar").collection("categories");
    const productsCollection = client.db("pcbazar").collection("products");
    const reviewsCollection = client.db("pcbazar").collection("reviews");

    if (req.method === "GET") {
      const results = await productsCollection.find({
        product: req.query.productid,
      });
      res.send({
        success: true,
        data: results,
      });
    }
    if (req.method === "POST") {
      const results = await productsCollection.insertOne(req.body);
      res.send({
        success: true,
        data: results,
      });
    }
  } finally {
  }
}

export default run;
