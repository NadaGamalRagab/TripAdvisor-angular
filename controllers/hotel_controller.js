const Hotels = require("../models/hotels");

module.exports = {

    all(req, res, next) {
        const limit = parseInt(req.query.limit) || ''
        Hotels.find({}).limit(limit)
            .then(hotels => res.status(200).send(hotels))
            .catch(next)
    },
    create(req, res, next) {
        // next from middelware
        const hotelProps = req.body;
        Hotels.create(hotelProps)
            .then(hotels =>
                res.status(201).send(hotels)) // 201 to user
            .catch(next) // if error send to next middle ware


    },
    // //
    edit(req, res, next) {
        const hotelsId = req.params.id;
        const hotelsProps = req.body;
        // get user and update
        Hotels.findByIdAndUpdate({
                _id: hotelsId
            }, hotelsProps)
            // if success get user after updated
            .then(() => Hotels.findById({
                _id: hotelsId
            }))
            // //if you get user send it
            .then(hotels => res.status(200).send(hotels))
            // //else send to middle
            .catch(next);
    },
    // //
    delete(req, res, next) {
        const hotelsId = req.params.id;
        Hotels.findByIdAndRemove({
                _id: hotelsId
            })
            // in case is removed return 204 abject?
            .then(hotels => res.status(204).send(hotels))
            .catch(next);
    }
};