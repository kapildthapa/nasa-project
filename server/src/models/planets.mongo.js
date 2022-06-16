const mongoose = require('mongoose');

const planetSchemas = new mongoose.Schema({
    keplerName: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Planet', planetSchemas);