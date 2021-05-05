const router = require('express').Router();
const sendgridMail = require('@sendgrid/mail');

router.post('/api/contact', async (req, res) => {
    sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: process.env.MAILBOX,
        from: `Nodefolio <${process.env.SENDGRID_AUTH_DOMAIN}>`,
        subject: req.body.subject,
        text: `Sender's name: ${req.body.name}\nSender's email: ${req.body.email}\nMessage: ${req.body.message}`
    };
    try {
        await sendgridMail.send(msg);
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
        if (error.response) { console.error(error.response.body); }
    }
});

module.exports = {
    router
}