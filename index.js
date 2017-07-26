const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");
const expressValidator = require('express-validator');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
//Turn on defaualt template engine
app.set('view engine', 'mustache');
//Set where we store our views
app.set('views', __dirname + '/views');

//set up bodyParser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(expressValidator());

app.use(require("./todolistRouter"));




app.listen(3000, () => {
  console.log("Node running at http://localhost:3000")
})
