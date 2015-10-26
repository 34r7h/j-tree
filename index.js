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

	/*
	 var customerEmail = new sendgrid.Email();
	 email.addTo(req.body.to);
	 email.setFrom('jeremy@telcobillcutters.com.au');
	 email.setSubject('Your suggested mobile plans');
	 email.setText('The plans selected for you are (plans), these are suggestions based on the usage you entered and is a great tool to assist in selecting and negotiating the next plan to go on. Our hope is that you have found this free service valuable and that it will help Australian consumers become more informed buyers with their service providers. We serve to inspire change in the industry that gives control back to the ozzy battlers, by simplifying the telco game!' + req.body.text);
	 email.addHeader('X-Sent-Using', 'SendGrid-API');
	 email.addHeader('X-Transport', 'web');

	 sendgrid.send(customerEmail, function(err, json) {
	 if (err) {
	 return res.send("Problem Sending Email!!!!");
	 }
	 console.log(json);
	 res.send("Email Sent OK!!!!");
	 });
	 */

	console.log('email', req.body);
	var email = new sendgrid.Email();
	email.addTo(req.body.to);
	email.setFrom('jeremy@telcobillcutters.com.au');
	email.setSubject(req.body.subject);
	email.setText(req.body.text);
	// email.addHeader('X-Sent-Using', 'SendGrid-API');
	email.setHeaders({'X-Transport': 'web'});

	sendgrid.send(email, function (err, json) {
		if (err) {
			return res.send("Problem Sending Email!!!!");
		}
		console.log(json);
		res.send("Email Sent OK!!!!");
	});

	setTimeout(function () {
		var emailSales = new sendgrid.Email();
		emailSales.addTo('jeremy@telcobillcutters.com.au');
		emailSales.setFrom(req.body.to);
		emailSales.setSubject(req.body.subject);
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
	}, 2000);

});

app.use('/api', router);

app.listen(app.get('port'), function () {
	console.log('Node app is running on port', app.get('port'));
});


