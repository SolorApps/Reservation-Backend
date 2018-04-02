const Reservation = require('../model/reservation');

/**
 * Finds a all the reservation in the Reservation collection.
 * @return {promise} A promise that resolves with all the Reservations
 */
module.exports.getReservations = () => {
    return Reservation.find({});
}

/**
 * Finds a single reservation in the Reservation collection.
 * @param {string} name - The name of the record to find.
 * @return {promise} A promise that resolves with the Reservation that matches the name
 */
module.exports.findReservationByName = (name) => {
    var splitName = name.split(' ');
    return Reservation.findOne({ name: { first: splitName[0], last: splitName[1] } });
};

/**
 * Finds a single reservation in the Reservation collection.
 * @param {string} _id - The ID of the record to find.
 * @return {promise} A promise that resolves with the Reservation that matches the ID
 */
module.exports.findReservationById = (_id) => {
    return Reservation.findById(_id);
};

/**
 * Creates a single reservation in the Reservation collection.
 * @param {object} reservationProps - Object containing name.first, name.last, and phoneNumber
 * @return {promise} A promise that resolves with the Reservation that was created
 */
module.exports.createReservation = (reservationProps) => {
    const reservation = new Reservation(reservationProps);
    return reservation.save();
};

/**
 * Deletes a single reservation from the Reservation collection
 * @param {string} _id - The ID of the reservation to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */
module.exports.deleteReservation = (_id) => {
    return Reservation.findByIdAndRemove(_id);
};