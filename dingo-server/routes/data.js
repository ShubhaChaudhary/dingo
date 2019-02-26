const express = require('express')
const router = express.Router();


const Data = require('../model/DataModel')

router.get('/performance', (req, res) => {
    Data.aggregate(
        [
        { "$match" : {
            "Location" : "Off Contract Trucks", 
            "Global Asset Make" : "Caterpillar", 
            "Global Component Model" : "793C", 
            "Global Asset Type" : "Off-Highway Truck", 
            "Global Asset Model" : "793C", 
            "Global Component Type" : "Transmission"
        }
        }, 
        { 
            "$group" : {
                "_id" : {
                    "Component Profile" : "$Component Profile", 
                    "RemoveDate" : "$RemoveDate"
                }, 
                "AVG(Component Age)" : {
                    "$avg" : "$Component Age"
                }
            }
        }, 
      
        { 
            "$sort" : {
                "RemoveDate" : 1
            }
        }
    ]).then((result)=>{
            res.send(result)
        }).catch((e)=>{
            res.send(e)
        })
})
// router.post('/',async (req,res)=>{
//     const body=await (req.body)
//     console.log(body)
//        var data= new Data(
//        {
//         site:body.site,
//        })
//       data.save().then((doc)=>{
//         res.send(doc)
//        }).catch((e)=>{
//            console.log("can't save data")
//        })
//    })
module.exports = router