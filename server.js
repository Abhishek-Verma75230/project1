import express  from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Connection from './database/db.js';
import bodyParser from 'body-parser';
import path from 'path';
import Router from './routes/route.js';

const __dirname=path.resolve();

dotenv.config();

const app=express();


app.use(cors());

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',Router);




 app.use(express.static(path.join(__dirname,"client/build")));


app.get('*',function(_,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"),function(err){
        res.status(500).send(err);
    })
})



const port=process.env.PORT||8000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

const URL=process.env.MONGO_URI||`mongodb://${username}:${password}@ac-lxcz4jx-shard-00-00.r1xh8cl.mongodb.net:27017,ac-lxcz4jx-shard-00-01.r1xh8cl.mongodb.net:27017,ac-lxcz4jx-shard-00-02.r1xh8cl.mongodb.net:27017/?ssl=true&replicaSet=atlas-3kdulb-shard-0&authSource=admin&retryWrites=true&w=majority`


Connection(URL);