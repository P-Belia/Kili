const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { nom, prenom, entreprise, email, telephone, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, // true pour les connexions SSL
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: 'Nouveau message du formulaire de contact',
        text: `Nom: ${nom}\nPrénom: ${prenom}\nEntreprise: ${entreprise}\nEmail: ${email}\nTéléphone: ${telephone}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.send('Email envoyé avec succès!');
    });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});

