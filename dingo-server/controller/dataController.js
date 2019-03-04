module.exports = (Data) => {
    //  Retrieves the Component Age and total count from mongodb Atlas
    const dashboard = (req, res) => {
        Data.aggregate([
            { $match: { $or: [{ Site: 'Newmont Nevada' }, { Site: 'BMA Saraji' }] } },
            {
                $bucket: {
                    groupBy: "$Component Age",
                    boundaries: [0, 5000, 10000, 15000, 20000, 25000, 30000],
                    default: "30000 <",
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
        dashboard,
        performance
    }
}