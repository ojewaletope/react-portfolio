const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact', (req, res)=> {
  nodemailer.createTestAccount((err, account) => {
    let name = req.body.data.name;
    let email = req.body.data.email;
    let message = req.body.data.message;

    const htmlEmail = `
      <h2>Message Content</h2>
      <p>From: ${name}</p>
      <p>Email Address: ${email}</p>
      <h4>Message:</h4>
      <p>${message}</p>
    `

    let transporter = nodemailer.createTransport({
      host: 'smtp.google.com',
      port: 487,
      auth: {
        user: "topeojewale@gmail.com",
        password: "hislight1092"
      }
    });

    let mailOptions = {
      from: email,
      to: "topeojewale@gmail.com",
      replyTo: email,
      subject: "New Message",
      text: message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if(err) {
        return console.log(err)
      }
      console.log('Message sent: %s', info.messageId);
    })
  })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
