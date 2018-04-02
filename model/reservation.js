var mongoose = require('mongoose');

// Define our user schema
const reservationSchema = new mongoose.Schema({
    name: {
        first: { type: String, require: true },
        last: { type: String, require: true }
    },
    phoneNumber: { type: String, required: true, get: phoneFormatter },
}, { toJSON: { getters: true }, id: false }
);

// Virtuals
reservationSchema.virtual('fullName').get(function () {
    return this.name.first + ' ' + this.name.last;
})

function phoneFormatter(pn) {
    areaCode = pn.slice(0, 3);
    firstPart = pn.slice(3, 6);
    secondPart = pn.slice(6, pn.length);
    return areaCode + '-' + firstPart + '-' + secondPart;
}

module.exports = mongoose.model('reservation', reservationSchema);;