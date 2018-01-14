const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
const favicon = require('express-favicon');
const port = 5000;
const app = express();
const http = require('http');//.Server(app);
const index = require('./routes/index');
const contacts = require('./routes/contacts');

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(favicon(__dirname + '/public/favicon.png'));
// Set Static Folder

app.use(express.static(path.join(__dirname, 'public')));
// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// use JWT auth to secure the api


app.use('/', index);
app.use('/api/contacts', contacts);
const server = http.createServer(app);


server.listen(process.env.PORT || 5000, function(){
    console.log('Server started on port '+port);
});