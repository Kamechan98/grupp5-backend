const router = require('express').Router()

const errandsModel = require('../models/errandsModel')

router.post('/', errandsModel.createNewErrand)

router.get('/', errandsModel.getErrands)

router.get('/:id', errandsModel.getErrandById)


module.exports = router