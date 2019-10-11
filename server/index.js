const express= require('express')
const app=express()
const bodyParser=require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = Promise
app.use(bodyParser.json())


mongoose.connect('mongodb://localhost:27017/feedback')
.then((err)=> console.log('Mongoose up'))

const admin= require('./models/admins')
app.post('/api/adminLogin', async(req,res)=>{
    const {userName, password}= req.body
    console.log(req.body)
    const result=await admin.findOne({userName, password})
    console.log(result)

    if (!result)
    {
        console.log("error")
        res.json({success:false})
    }
    else{
        console.log("logged in")
        
        res.json({success:true})
    }
})
const userFeedback= require('./models/userFeedbacks')
app.post('/api/feedbackSubmit', async (req,res)=>{
    const {emailId, quality, qualityDesc, quantity, quantityDesc, price, priceDesc, service, serviceDesc}=req.body
     // console.log(req.body)
    const f= new userFeedback({
        emailId,
        quality,
        qualityDesc,
        quantity,
        quantityDesc,
        price,
        priceDesc,
        service,
        serviceDesc
    })

    const result=await f.save()
    console.log(result)
   console.log("datasaved")
   if (result)
   {
       res.json({success:true})
   }
   
    
})


app.get('/api/getfeedbackAll', async(req,res)=>{
    console.log("connected")
    const result= await userFeedback.find({});
    console.log(result)
    if (!result)
    {
        console.log("errorrrrrrrrrrrrrrrr!!");
        
    }
    else
    {
        res.json(result)
    }

})

app.post('/api/deleteFeedbacks', async(req,res)=>{
    const {emailId}= req.body
    console.log(emailId)
    
    const result=await userFeedback.findOne({emailId})
    if (result)
    {
        await userFeedback.deleteMany({emailId})
        res.json({success:true})
    }
    
    else
    {
        console.log("error")
        res.json({success:false})
    }
})




app.listen(1234, () => console.log("server listening at 1234"))