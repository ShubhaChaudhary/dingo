const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DingoDataSchema = new Schema({
    componentAge: Number
})

module.exports = mongoose.model('Data', DingoDataSchema)