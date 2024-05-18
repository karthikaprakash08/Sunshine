const express = require('express');
const router = express.Router();
const app = express();
var cors = require("cors")
const bodyParser = require('body-parser');
const multer = require("multer")
const port = 3030; // You can choose any port
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://karthikaprakashr:EhoevR1isC7vXynC@sunshine.aqtzewx.mongodb.net/?retryWrites=true&w=majority&appName=Sunshine";
const client = new MongoClient(uri);

app.use(cors())
app.use(bodyParser.json());
app.get('/users', (req,res)=>{

  async function fetch(){
    try{
      await client.connect();

        const db = client.db("Sunshine_DB");
        const col = db.collection("Visitors");

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
app.post('/', (req, res)=>{
  console.log(req.body)
  res.json({ message: 'Data received successfully!' });
  async function run() {
    try {
        await client.connect();

        const db = client.db("Sunshine_DB");
          const col = db.collection("Visitors");
        console.log("Successfully connected to Atlas");

        const peopleDocuments = [
          {
            "name": req.body.name,
            "email": req.body.email,
            "phone": req.body.phone,
            "location": req.body.location,
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