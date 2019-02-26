const express = require('express')
const router = express.Router();

module.exports= (Data) => {
    const performanceController= require ('../controller/performanceController')(Data)
    router.get('/performance', performanceController.performance )
    return router
}
