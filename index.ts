import Server from './classes/server'
import router  from './routes/router'
import bodyParser = require('body-parser');
import cors from 'cors';

const server = new Server();
//configuration
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json());
//cors
server.app.use( cors( { origin: true, credentials: true} ));

//routes
server.app.use('/', router);

server.start(() =>{

    console.log(`server started on ${server.port}`)
})