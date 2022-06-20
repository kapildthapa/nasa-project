const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://kapildthapa:H3ll0M0ng0@nasacluster.adq7d.mongodb.net/nasa?retryWrites=true&w=majority';

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

async function mongoDisconnect() {
   await mongoose.disconnect(); 
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}