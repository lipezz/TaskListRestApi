var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    PORT = 3000,
    Task = require('./api/models/taskListModel'); //model loading

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/TaskDb', { useNewUrlParser: true }); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
  
var routes = require('./api/routes/taskListRoutes'); //importing route
routes(app); //register the route

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});