global.express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database-config.js');
global.mongoose = require('mongoose');
const multer = require('multer');
const Api = require('./api');
const fs = require('fs');
const path = require('path');
const app = express();

global.ROOT_PATH = __dirname;
global.Multer = multer({
    dest: global.ROOT_PATH + '/uploads/'
  });
  

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

var upload = multer({ dest: './uploads' });
  
// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/", express.static(__dirname));


// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

new Api(app);
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

module.exports =  app