import express from 'express';
// import bodyParser from 'body-parser';
// import fs from 'fs';
// import cors from 'cors';

const app = express();
// app.use(bodyParser.json());
// app.use(cors());
const port=4000;

// const botResponse=JSON.parse(fs.readFileSync('./data.json'))
 const botResponse=[
    {
        "id":1,
        "content":"Hello"
    },
    {
        "id":2,
        "content":"How are You?"
    },
    {
        "id":3,
        "content":"How can i help you today?"
    }
]

app.get('/',(req,res)=>{
    res.send(botResponse)
})

app.listen(port,()=>{
    console.log(`server is listening on port http://localhost:${port}/ `);
})

export default app;
