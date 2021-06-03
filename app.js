var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('forms');
})

app.post('/postName', function(req, res){
    const name = req.body.name_field;
   res.render('firstEjsTemp', {name: name});
});

// index page
app.get('/home', function(req, res) {
    var mascots = [
      { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
      { name: 'Tux', organization: "Linux", birth_year: 1996},
      { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";
  
    res.render('pages/index', {
      mascots: mascots,
      tagline: tagline
    });
  });
  
  // about page
  app.get('/about', function(req, res) {
    res.render('pages/about');
  });



 app.listen(3000, () => {
     console.log("listening on port 3000")
 });