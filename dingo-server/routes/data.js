const express = require('express')
const router = express.Router();

module.exports = (Data) => {
    const dataController = require('../controller/dataController')(Data)
    router.post('/filter', dataController.filter)
    router.post('/performance', dataController.performance)
    router.post('/dashboard', dataController.dashboard)
    return router
}
