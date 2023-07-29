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
    const reviewsCollection = client.db("pcbazar").collection("reviews");

    if (req.method === "GET") {
      const id = req.query.productid;
      const product = await productsCollection.findOne({
        _id: new ObjectId(id),
      });

      if (!product) {
        // If the product is not found, send a 404 response
        return res.status(404).json({
          success: false,
          message: "Product not found.",
        });
      }

      // Calculate average rating for the product
      const ratings = await reviewsCollection
        .find({ product: new ObjectId(id) })
        .toArray();
      const totalRatings = ratings.length;
      let totalRatingSum = 0;

      for (const rating of ratings) {
        totalRatingSum += rating.rating;
      }

      const averageRating =
        totalRatings > 0 ? totalRatingSum / totalRatings : 0;

      // Add average rating to the product object
      product.averageRating = averageRating;

      res.json({
        success: true,
        data: product,
      });
    }
  } finally {
  }
}

export default run;
