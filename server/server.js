require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const transport = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER, // Usa variables de entorno
    pass: process.env.EMAIL_PASSWORD, // Usa variables de entorno
  },
});

transport.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send emails");
  }
});

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});


app.post('/contact', (req, res) => { // Ruta corregida
  const { firstName, lastName, email, phone, message } = req.body;

  console.log("Received contact form submission");

  const mail = {
    from: "Francososa1@hotmail.com",
    to: 'Francososa1@hotmail.com', // Reemplaza con tu dirección de correo electrónico
    subject: 'New contact form submission',
    html: `
      <p>You have received a new contact form submission:</p>
      <p>Name: ${firstName} ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
  };

  transport.sendMail(mail, (error) => {
    if (error) {
      console.error('Error sending email:', error);
      res.json({ code: 500, status: 'Failed to send email' });
    } else {
      res.json({ code: 200, status: 'Message Sent' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
