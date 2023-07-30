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

    if (req.method === "GET") {
      const randomProducts = await productsCollection
        .aggregate([{ $sample: { size: 6 } }])
        .toArray();
      res.send({
        success: true,
        data: randomProducts,
      });
    }
  } finally {
  }
}

export default run;
