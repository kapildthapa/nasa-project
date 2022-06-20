const http = require('http');

const app = require('./app');
const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require('./models/planets.model');

const hostname = 'localhost';
const port = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();
    await loadPlanetsData();
    
    server.listen(port, hostname, () => {
        console.log(`Server is running on http://${hostname}:${port}/`);
    });
}

startServer();