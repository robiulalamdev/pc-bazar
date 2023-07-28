const {MongoClient, ServerApiVersion}= require("mongodb")
const uri = process.env.DB_URL



const client = new MongoClient(uri,{
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});


async function run (req,res){
    try {
        await client.connect();
        console.log("ping your deployment");

        const categoriesCollection = client.db("pcbazar").collection("categories")
        const productsCollection = client.db("pcbazar").collection("products")

        if(req.method==="GET"){
            const products = await productsCollection.find({}).toArray();
            res.send({
                success: true,
                data: products
            })
        }

    } finally{

    }
}


export default run;