const express = require('express')
const router = express.Router();
const Data = require('../model/DataModel')

<<<<<<< HEAD
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
=======
router.get('/',(req,res)=>{
 Data.aggregate( [ 
        { $match : { Site :req.body.site } },
      {
        $bucket: {
          groupBy: "$Component Age",
          boundaries: [ 0, 5000, 10000, 15000, 20000, 25000, 30000 ],
            default:"> 30000",
          output: {
            "count": { $sum: 1 },
            "age" : { $push: "$Component Age" }
          }
         }       
     }
    
    ] ).then((result)=>{
           console.log(res.send({result}))
        }).catch(
           error => res.status(500).json({
               error: error.message
           })
       )
    
})
>>>>>>> 15afb3d52b040a73ae822508c28ae2f46ca04c9f
module.exports = router