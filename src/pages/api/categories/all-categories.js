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

        if(req.method==="GET"){
            const categories = await categoriesCollection.find({}).toArray();
            res.send({
                success: true,
                data: categories
            })
        }

    } finally{

    }
}


export default run;