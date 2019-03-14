module.exports = (Data) => {
    // Retrieves the filter field data for particular site
    const filter = (req, res) => {

        Data.aggregate([
            {
                "$match": {
                    "Site": req.body.Site
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
                    "Global Component Model": { $addToSet: '$Global Component Model' },
                    "Global Component Make": { $addToSet: '$Global Component Make' }
                }
            }
        ]).then((result) => {
            res.send(result)
        }).catch((e) => {
            res.send(e)
        })


    }




    //  Retrieves the Component Age and total count (last three year by default)from mongodb Atlas
    const dashboard = async (req, res) => {
        // User Site data

        let site = req.body.Site;
        let range = req.body.Range;
        let siteData = await Data.aggregate([
            {
                $match: {
                    'Site': site,
                    ...req.body.filterData,
                    "$or": range

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
        ])

        const { Location, ...noA } = req.body.filterData
        let dingoData = await Data.aggregate([

            {
                $match: {
                    'Site': { '$ne': site },
                    ...noA,
                    "$or": range
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

        ])

        res.send([siteData, dingoData])
    }


    //  Retrieves the Avg Component Age according to their Removal Date from mongodb Atlas
    const performance = async (req, res) => {
        let site = req.body.Site;
        let range = req.body.Range;

        let siteData = await Data.aggregate([
            {
                "$match": {
                    'Site': site,
                    ...req.body.filterData,
                    "$or": range

                }
            },
            {
                "$group": {
                    "_id": "$RemoveDate",
                    "AVG": {
                        "$avg": "$Component Age"
                    }
                }
            },

            {
                "$sort": {
                    "_id": 1
                }
            }
        ])
        const { Location, ...noA } = req.body.filterData

        let dingoData = await Data.aggregate(
            [
                {
                    "$match": {
                        'Site': { '$ne': site },
                        ...noA,
                        "$or": range

                    }
                },
                {
                    "$group": {
                        "_id": "$RemoveDate",
                        "AVG": {
                            "$avg": "$Component Age"
                        }
                    }
                },

                {
                    "$sort": {
                        "RemoveDate": 1
                    }
                }
            ])
        res.send([siteData, dingoData])
    }

    return {
        filter,
        dashboard,
        performance
    }
}
