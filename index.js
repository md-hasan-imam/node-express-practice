const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors')

app.use(cors());

app.use(express.json());


const users =[
    {id:1, name:'shihabuddin', email:'shihabudding@gmail.com'},
    {id:2, name:'hasibuddin', email:'hasibuddin@gmail.com'},
    {id:3, name:'komoluddin', email:'komoluddin@gmail.com'},
    {id:4, name:'sogiruddin', email:'sogiruddin@gmail.com'},
    {id:5, name:'babuluddin', email:'babuludding@gmail.com'},
    {id:6, name:'korimuddin', email:'korimuddin@gmail.com'},
    {id:7, name:'sogiruddin', email:'sogiruddin@gmail.com'},
]

app.get('/',(req, res) =>{
    res.send(users);
})

app.get('/users',(req, res) =>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched)
    }
    else{
        res.send(users);
    }
})

app.get('/user/:id',(req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const matched = users.filter(user => user.id === id );
    res.send(matched);
})

app.post('/user',(req, res)=>{
    const user =req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})


app.listen(port, () => {
  console.log('Example app listening on port', port)
})