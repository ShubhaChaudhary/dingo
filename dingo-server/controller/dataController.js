module.exports = (Data) => {
    //  Retrieves the Component Age and total count from mongodb Atlas
    const dashboard =  (req, res) => {
       Data.aggregate([
          { 
                    "$match" : {
                        
                                "Site" : "Newmont Nevada",
                       "$or":[{ "RemoveDate" : 2019} ,{"RemoveDate" : 2018},{ "RemoveDate" : 2017}]
                            
                    }
                },
          { "$group": {
            "_id": {
              "RemoveDate": "$RemoveDate",
              "Component Age" :
                {
                  $switch:
                    {
                      branches: [
                        
                        { case: { "$lt": [ "$Component Age", 5000 ] }, "then": 5000 },
                        { "case": { "$lt": [ "$Component Age", 10000 ] }, "then": 10000 },
                        { "case": { "$lt": [ "$Component Age", 15000 ] }, "then": 15000 },
                        { "case": { "$lt": [ "$Component Age", 20000 ] }, "then": 20000 },
                        { "case": { "$lt": [ "$Component Age", 25000 ] }, "then": 25000 },
                        { "case": { "$lt": [ "$Component Age", 30000 ] }, "then": 30000 },
                        { "case": { "$lt": [ "$Component Age", 35000 ] }, "then": 35000 },
                        { "case": { "$lt": [ "$Component Age", 40000 ] }, "then": 40000 },
                        { "case": { "$lt": [ "$Component Age", 45000 ] }, "then": 45000 },
                        { "case": { "$lt": [ "$Component Age", 50000 ] }, "then": 50000 },
                        { "case": { "$lt": [ "$Component Age", 55000 ] }, "then": 55000 },
                        { "case": { "$lt": [ "$Component Age", 60000 ] }, "then": 60000 },
                        { "case": { "$lt": [ "$Component Age", 65000 ] }, "then": 65000 },
                        { "case": { "$lt": [ "$Component Age", 70000 ] }, "then": 70000 },
                        { "case": { "$lt": [ "$Component Age", 75000 ] }, "then": 75000 },
                        { "case": { "$lt": [ "$Component Age", 80000 ] }, "then": 80000 },
                        { "case": { "$gt": [ "$Component Age", 80000 ] }, "then": "Others" }
                      ]
                    }             
                    
                 }
            },
            "count": { "$sum": 1 }
          }},
          {
            "$sort": {
                "RemoveDate": 1
            }
          }
        ]).then((result) => {
            res.send(result)
        }).catch((e) => {
            res.send(e)
        })
        
        
       
          
    }


    //  Retrieves the Avg Component Age according to their Removal Date from mongodb Atlas
    const performance = (req, res) => {
        Data.aggregate(
            [
                {
                    "$match": {
                        "Location": "Off Contract Trucks",
                        "Global Asset Make": "Caterpillar",
                        "Global Component Model": "793C",
                        "Global Asset Type": "Off-Highway Truck",
                        "Global Asset Model": "793C",
                        "Global Component Type": "Transmission"
                    }
                },
                {
                    "$group": {
                        "_id": {
                            "Component Profile": "$Component Profile",
                            "RemoveDate": "$RemoveDate"
                        },
                        "AVG(Component Age)": {
                            "$avg": "$Component Age"
                        }
                    }
                },

                {
                    "$sort": {
                        "RemoveDate": 1
                    }
                }
            ]).then((result) => {
                res.send(result)
            }).catch((e) => {
                res.send(e)
            })
    }

    return {
        dashboard,
        performance
    }
}