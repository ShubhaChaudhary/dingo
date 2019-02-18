const app = require('express')()

app.get('/', (req, res) => {
    res.status(200).send("Dingo Dashboard")
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log('App listening on port 3001!'))