const router = require('express').Router()

const errandsModel = require('../models/errandsModel')

router.post('/', errandsModel.createNewErrand)


module.exports = router