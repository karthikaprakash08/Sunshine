const express = require('express');
const router = express.Router();
const app = express();
var cors = require("cors")
const bodyParser = require('body-parser');
const multer = require("multer")
const port = 3030; // You can choose any port
const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://deivasigamani:XZzuy3gbZYwnQgWY@cluster0.lmjggi8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = "mongodb+srv://deivasigamani:jg7EZVUDiNPQM9ue@cluster0.nbpwxda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

app.use(cors())
app.use(bodyParser.json());

app.get('/check', (req,res)=>{

    async function fetch(){
      try{
        await client.connect();
  
          const db = client.db("C-suite");
          const col = db.collection("users");
  
          const filter = { "email": req.query.email };
          col.findOne(filter).then((document)=>{
          res.json(JSON.stringify(document));
    })
      }catch (err) {
        console.log(err.stack);
    }
  }
  fetch().catch(console.dir);
    
  })

app.get('/login', (req,res)=>{

  async function fetch(){
    try{
      await client.connect();

        const db = client.db("C-suite");
        const col = db.collection("users");

        const filter = { "email": req.query.email };
        col.findOne(filter).then((document)=>{
        res.json(JSON.stringify(document));
  })
    }catch (err) {
      console.log(err.stack);
  }
}
fetch().catch(console.dir);
  
})

app.post('/signup', (req, res)=>{
  console.log(req.body)
  res.json({ message: 'Data received successfully!' });
  async function run() {
    try {
        await client.connect();

        const db = client.db("C-suite");
        const col = db.collection("users");
        console.log("Successfully connected to Atlas");

        const peopleDocuments = [
          {
            "name": req.body.name,
            "email": req.body.email,
            "password": req.body.password,
          },
        ]

        const p = await col.insertMany(peopleDocuments);
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
  }
  run().catch(console.dir);
})

app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});