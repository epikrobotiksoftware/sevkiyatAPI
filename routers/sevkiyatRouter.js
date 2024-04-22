const express = require('express')
const sevkiyatController = require('./../controllers/sevkiyatController')

const router = express.Router()

router.route('/getBattery').get(sevkiyatController.getBattery)
router.route('/sendRobot').post(sevkiyatController.sendRobot)
module.exports = router
