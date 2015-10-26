var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/www'));
app.use(bodyParser.json()); //needed for req.body

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

/*
*
* Email
*
* */

var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
sendgrid.send({
  to:       'irth03@gmail.com',
  from:     'irth03@gmail',
  subject:  'Hello World',
  text:     'My first email through SendGrid.'
}, function(err, json) {
  if (err) { return console.error(err); }
  console.log(json);
});
var router = express.Router();
router.post('/email', function(req, res) {
  var email = new sendgrid.Email();
  email.addTo(req.body.to);
  email.setFrom(req.body.from);
  email.setSubject(req.body.subject);
  email.setText(req.body.text);
  email.addHeader('X-Sent-Using', 'SendGrid-API');
  email.addHeader('X-Transport', 'web');

  sendgrid.send(email, function(err, json) {
    if (err) {
      return res.send("Problem Sending Email!!!!");
    }
    console.log(json);
    res.send("Email Sent OK!!!!");
  });
});

app.use('/api', router);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


