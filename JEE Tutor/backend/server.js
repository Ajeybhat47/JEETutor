const express=require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({});

const app=express();
const port =process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri="mongodb+srv://Ajey_B:ajey@123@cluster0.ikfxzfn.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri,{useUnifiedTopology:true,
    useNewUrlParser: true });

const connection=mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
})

app.use('/subjects',require('./routes/subject'));
app.use('/',require('./routes/UserInfo'));

app.listen(port,()=>
{console.log(`Server is running on PORT:${port}`)});