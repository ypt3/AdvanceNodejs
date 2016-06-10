var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var people = [
    {
      name: 'Alan Tsai'
    },
    {
      name: 'Tom Tsen'
    },
    {
      name: 'Angela Vuong'
    }
];

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', { serverPeople: people });
});

app.listen(port, function(){
  console.log("listening on port 3000");
});
