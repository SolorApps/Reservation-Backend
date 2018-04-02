const ReservationQueries = require('../queries/reservationQueries')


module.exports.reservations = function (req, res, next) {
    if (req.query._id) {
        ReservationQueries.findReservationById(req.query._id)
            .then((reservation) => {
                res.json(reservation)
            }).catch((err) => {
                return next(err);
            })
    } else {
        ReservationQueries.getReservations()
            .then((reservations) => {
                res.json(reservations);
            }).catch((err) => {
                return next(err);
            })
    }
}

module.exports.getReservations = function (req, res, next) {
    ReservationQueries.getReservations()
        .then((reservations) => {
            res.json(reservations);
        }).catch((err) => {
            return next(err);
        })
}

module.exports.findReservationById = function (req, res, next) {
    ReservationQueries.findReservationById(req.query._id)
        .then((reservation) => {
            res.json(reservation);
        }).catch((err) => {
            return next(err);
        })
}

module.exports.createReservation = function (req, res, next) {
    reservationProps = {
        name: {
            first: req.body.first,
            last: req.body.last
        },
        phoneNumber: req.body.phoneNumber
    }
    ReservationQueries.createReservation(reservationProps)
        .then((reservation) => {
            res.json(reservation);
        }).catch((err) => {
            return next(err);
        })
}

module.exports.deleteReservation = function (req, res, next) {
    ReservationQueries.deleteReservation(req.body._id)
        .then(() => {
            res.json({ message: 'reservation was deleted' });
        }).catch((err) => {
            return next(err);
        })
}