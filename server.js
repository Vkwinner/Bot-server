const express = require ('express');
const bodyParser = require('body-parser')
const fs = require('fs');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port=4000;

const botResponse=JSON.parse(fs.readFileSync('data.json'))

app.get('/',(req,res)=>{
    console.log(botResponse)
    res.send(botResponse)
})

app.listen(port,()=>{
    console.log(`server is listening on port http://localhost:${port} `);
})