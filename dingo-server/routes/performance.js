const express = require('express')
const router = express.Router();

module.exports= (Data) => {
    const dataController= require ('../controller/dataController')(Data)
    router.get('/performance', dataController.performance )
    router.get('/dashboard', dataController.dashboard )
    return router
}
