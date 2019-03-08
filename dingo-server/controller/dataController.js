module.exports = (Data) => {
    // Retrieves the filter field data for particular site
    const filter = (req, res) => {
        Data.aggregate([
            {
                "$match": {
                    "Site": "Newmont Nevada"
                }
            },
            {
                $group: {
                    _id: null,
                    "Location": { $addToSet: '$Location' },
                    "Global Asset Make": { $addToSet: "$Global Asset Make" },
                    "Global Asset Model": { $addToSet: "$Global Asset Model" },
                    "Global Asset Type": { $addToSet: "$Global Asset Type" },
                    "Global Component Type": { $addToSet: '$Global Component Type' },
                    "Global Component Model": { $addToSet: '$Global Component Model' }
                }
            }
        ]).then((result) => {
            res.send(result)
        }).catch((e) => {
            res.send(e)
        })


    }




    //  Retrieves the Component Age and total count (last three year by default)from mongodb Atlas
    const dashboard = (req, res) => {
        Data.aggregate([
            {
                $match: {

                    "Site": "Newmont Nevada",
                    "$or": [{ "RemoveDate": 2019 }, { "RemoveDate": 2018 }, { "RemoveDate": 2017 }]

                }
            },
            {
                $bucket: {
                    groupBy: "$Component Age",
                    boundaries: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000, 22000, 24000, 26000, 28000, 30000, 32000, 34000, 36000, 38000, 40000, 42000, 44000, 46000, 48000, 50000],
                    default: "50000 <",
                    output: {
                        "count": { $sum: 1 }
                    }
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
        filter,
        dashboard,
        performance
    }
}