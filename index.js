import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port=4000;

const botResponseFromData=JSON.parse(fs.readFileSync('./data.json'));
                                     
app.get('/',(req,res)=>{
    res.send(botResponseFromData)
})

app.listen(port,()=>{
    console.log(`server is listening on port http://localhost:${port}/ `);
})

export default app;
