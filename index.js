const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');

// middle ware
app.use(cors());

const users = [
    {id: 1, name: "Sabana", email: "sabana@gmail.com"},
    {id: 2, name: "Sabnoor", email: "sabnoor@gmail.com"},
    {id: 3, name: "Kabila", email: "kabila@gmail.com"},
];

app.get('/', (req,res)=>{
    res.send('User Management Server is Running')
});

app.get('/users', (req,res)=>{
    res.send(users);
});

app.post('/users',(req, res) =>{
    console.log("post api hitting");
    console.log(req.body);
})


// optional
app.listen(port, ()=>{
    console.log(`server is running on PORT: ${port}`);
})