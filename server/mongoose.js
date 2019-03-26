const mongoose = require('mongoose');

module.exports = {
    mongoose: mongoose.connect('mongodb://localhost/auth_data',
    {useNewUrlParser: true})
}