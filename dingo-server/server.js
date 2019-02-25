const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
let PORT = 3001
app.use(bodyParser.json())
app.use(cors())

// Connects to our MLAB Database
const mongoose = require('mongoose')
const database = require('./db')
mongoose.connect(database, (err) => {
    if (err) {
        console.log('Error connecting to database', err)
    } else {
        console.log('Connected to database!')
    }
})
app.use('/data', require('./routes/data'))

app.get('/', (req, res) => {
    res.status(200).send("Dingo Dashboard")
})



app.listen(PORT, () => console.log('App listening on port 3001!'))