const http = require('http');
const mongoose = require('mongoose') ;

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const hostname = 'localhost';
const port = process.env.PORT || 8000;

const MONGO_URL = 'mongodb+srv://kapildthapa:H3ll0M0ng0@nasacluster.adq7d.mongodb.net/nasa?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function startServer() {
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await loadPlanetsData();
    
    server.listen(port, hostname, () => {
        console.log(`Server is running on http://${hostname}:${port}/`);
    });
}

startServer();