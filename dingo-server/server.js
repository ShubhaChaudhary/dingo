const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())

// Connects to our MLAB Database
const mongoose = require('mongoose')
const database = require('./db')
mongoose.connect(database, (err) => {
    if (err) {
        console.log('Error connecting to database', err)
    } else {
        console.log('Connected to database defactoring!')
    }
})
//  Models
const Data = require('./model/DataModel')
// Routes with model passed through
app.use('/data', require('./routes/data')(Data))

app.get('/', (req, res) => {
    res.status(200).send("Dingo Dashboard ")
  
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log('App listening on port 3001!'))