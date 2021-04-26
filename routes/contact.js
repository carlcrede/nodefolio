const router = require('express').Router();
const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid');
const transport = nodemailer.createTransport(sendgrid({apiKey: process.env.SENDGRID_API_KEY}));

router.post('/api/contact', (req, res) => {
    //console.log(req.body);
    res.redirect('/');
    // some form validation..
    // send email with nodemailer
    transport.sendMail({
        from: '"Nodefolio" <carl_hassel@hotmail.com>',
        to: 'carlcrede@gmail.com',
        subject: req.body.subject,
        text: `Message: ${req.body.message}\nSender's email: ${req.body.email}`
    })
    .then(([res]) => {
        console.log(`Message delivered with code ${res.statusCode} ${res.statusMessage}`);
    })
    .catch(err => {
        console.log('Error:', err);
    })
});

module.exports = {
    router
}