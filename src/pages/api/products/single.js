const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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

    if (req.method === "GET") {
      const id = req.query.productid;
      const product = await productsCollection.findOne({
        _id: new ObjectId(id),
      });
      console.log(product);
      res.send({
        success: true,
        data: product,
      });
    }
  } finally {
  }
}

export default run;
