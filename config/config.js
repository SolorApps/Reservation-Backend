configValues = {
    mongoose: {
        username: 'test',
        password: 'test123'
    },
    server: {
        port: 3000
    }
}

module.exports = {
    getDbConnectionString: function () {
        return 'mongodb://' + configValues.mongoose.username +
            ':' + configValues.mongoose.password +
            '@ds231229.mlab.com:31229/reservationdb';
    }
}