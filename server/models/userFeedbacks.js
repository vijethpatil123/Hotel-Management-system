const mongoose= require('mongoose')

const userFeedbackSchema = new mongoose.Schema({
    emailId:String,
    quality:String,
    qualityDesc: {type: String, default: "No description"},
    quantity:String,
    quantityDesc:{type: String, default: "No description"},
    price:String,
    priceDesc:{type: String, default: "No description"},
    service:String,
    serviceDesc:{type: String, default: "No description"},
})

const userFeedback = mongoose.model('userFeedback', userFeedbackSchema)

module.exports = userFeedback