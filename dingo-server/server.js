const app = require('express')()
const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.status(200).send("Dingo Dashboard")
})



app.listen(PORT, () => console.log('App listening on port 3001!'))