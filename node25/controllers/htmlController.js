var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// var jsonParser = bodyParser.json();

module.exports = function(app) {
  app.get('/', function(req, res) {
    // res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>Hello World!</h1></body></html>');
    res.render('index');
  });

  app.get('/person/:id', function(req, res) {
    // res.send('<html><head></head><body><h1>Person: '+req.params.id+ '</h1></body></html>');
    res.render('person', {ID: req.params.id, Qstr: req.query.qstr});
  });

  app.post('/person', urlencodedParser, function(req, res) {
    res.send('Thank you!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
  });

  // app.post('/personjson', jsonParser, function(req, res) {
  //   res.send('Thank you for the json data');
  //   console.log(req.body.firstname);
  //   console.log(req.body.lastname);
  // });
};
