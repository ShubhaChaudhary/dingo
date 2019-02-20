const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dataSchema = new Schema({
    site:String, 

})

module.exports = mongoose.model('Data', dataSchema)