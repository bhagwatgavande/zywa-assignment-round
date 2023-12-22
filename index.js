const express = require('express'); 
const { json } = require('express/lib/response');
const userroutes = require('./app/routers/user.routes'); // Import the router.js file
const bodyParser = require('body-parser');
const helmet = require('helmet')
const status = require('express-status-monitor')
const db = require('./app/models')
const socket = require('socket.io')
require('dotenv').config();
const app = express();   
db.sequelize.sync()           
// Parse incoming JSON requests
app.use(bodyParser.json());
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true, limit: "1kb"}));
const port = process.env.PORT|| 3000;   
app.use(express.json({ limit: "1kb" })); 
app.use(status())        
app.get('/', (req, res) => {        
    res.json({
        status:200,
        msg:"working fine"
    });                                                            
});

const server = app.listen(port, () => {            
    console.log(`Now listening on port ${port}`); 
});
const io = socket(server,{
    cors:{
        origin:'*'
    }
})
require('./app/routers/user.routes')(app,io); // Example: /api/users

io.on('connection',socket=>{
    console.log('client connected')
})

// Helmet helps secure Express apps by setting HTTP response headers. //
//app.use(helmet())

