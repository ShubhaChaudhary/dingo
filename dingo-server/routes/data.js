const express = require('express')
const router = express.Router();
const Data = require('../model/DataModel')

router.get('/', (req, res) => {
    Data.find().then((site) => {
        res.send(site)
    }).catch(
        error => res.status(500).json({
            error: error.message
        })
    )
})
router.post('/', async (req, res) => {
    const body = await (req.body)
    console.log(body)
    var data = new Data(
        {
            site: body.site,
        })
    data.save().then((doc) => {
        res.send(doc)
    }).catch((e) => {
        console.log("can't save data")
    })
})
module.exports = router