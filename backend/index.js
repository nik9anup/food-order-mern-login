const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/login-details')


const UserSchema = new mongoose.Schema({
    srn: {type: String, required: true,unique:true},
    password:{type:String, required: true},
})

const UserModel = mongoose.model("users",UserSchema)

app.post('/',async (req,res)=>{
    console.log(req.body)
       const user = await UserModel.findOne({
        srn: req.body.srn,
        password: req.body.password,
       })
      
    if(user)
    {
        console.log("user found")
        return  res.json({status: 'ok',user:true})
    }
    else
    {
        return  res.json({status: 'error',user:false})
        
    }
    
})

app.listen(8080,()=>
{
    console.log('server starteddddd')
})