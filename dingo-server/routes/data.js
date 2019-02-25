const express = require('express')
const router = express.Router();
const Data = require('../model/DataModel')

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
module.exports = router