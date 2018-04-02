var router = require('express').Router();
var reservationController = require('../controller/reservationController');

// Reservation routes
router.get('/reservations', reservationController.reservations);
router.get('/getReservations', reservationController.getReservations);
router.get('/findReservationById', reservationController.findReservationById);
router.post('/createReservation', reservationController.createReservation);
router.delete('/deleteReservation', reservationController.deleteReservation);

module.exports = router;