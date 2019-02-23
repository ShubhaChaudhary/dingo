const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dingoDataSchema = new Schema({
   Site:String
})

module.exports = mongoose.model('Data', dingoDataSchema)