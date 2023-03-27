const errand = require('../schemas/errandsSchema');


// CRUD

// Create
exports.createNewErrand = (req, res) => {
    const { email, subject, message} = req.body

    if(!email || !subject || !message) {
        return res.status(400).json({
            message: 'You have to enter something in all the fields'
        })
    }

    errand.create({email, subject, message})
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => {
        res.status(500).json({
            message: 'Could not create errand'
        })
    })
}