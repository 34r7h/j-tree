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

var router = express.Router();

router.post('/email', function (req, res) {
	console.log('email', req.body);
	var email = new sendgrid.Email();
	email.addTo(req.body.to);
	email.setFrom('jeremy@telcobillcutters.com.au');
	email.setSubject(req.body.subject);
	email.setText(req.body.text);
	email.addHeader('X-Sent-Using', 'SendGrid-API');
	email.setHeaders({'X-Transport': 'web'});

	sendgrid.send(email, function (err, json) {
		if (err) {
			return res.send("Problem Sending Email!!!!");
		}
		console.log(json);
		res.send("Email Sent OK!!!!");
	});

});

router.post('/emailSales', function (req, res) {
	console.log('emailSales', req.body);
		var emailSales = new sendgrid.Email();
		emailSales.addTo('jeremy@telcobillcutters.com.au');
		emailSales.setFrom(req.body.to);
		emailSales.setSubject('Telco Leads M8');
		emailSales.setText(JSON.stringify(req.body.capture) + JSON.stringify(req.body.usage));
		emailSales.addHeader('X-Sent-Using', 'SendGrid-API');
		emailSales.addHeader('X-Transport', 'web');
		sendgrid.send(emailSales, function(err, json) {
			if (err) {
				return res.send("Problem Sending Email!!!!");
			}
			console.log(json);
			res.send("Email Sent OK!!!!");
		});

});

app.use('/api', router);

app.listen(app.get('port'), function () {
	console.log('Node app is running on port', app.get('port'));
});


