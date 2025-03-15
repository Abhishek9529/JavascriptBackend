const express = require('express')
const app = express();
const userModel = require('./models/user');
const cookieParser = require('cookie-parser');
const path = require('path')
const bcrypt = require('bcryptjs')

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res)=>{
    res.render("index")
})
app.post("/register", async(req, res)=>{
    let {email, password, name, age} = req.body;
    let user =await userModel.findOne({email})
    if(user) return res.status(500).send("User already registered");
    bcrypt.genSalt(10, (err, salt)=>{
        console.log(salt);
    })

    
    // console.log(email, password, name, age);
    
})



app.listen(3000)