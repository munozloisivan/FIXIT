var nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

// email sender function
exports.sendEmail = function(req, res){
// Definimos el transporter
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secureConnection: true,
        port: 465,
            auth: {
                user: 'eetakemongocbl@gmail.com',
                pass: 'passwordcbl'
            }
    });
// Definimos el email
    var mailOptions = {
        from: 'Fixit <eacode17@gmail.com>',
        to: 'munozloisivan@gmail.com',
        subject: 'Nodemailer test',
        text: 'Contenido del email de prueba'
    };
// Enviamos el email
    transporter.sendMail(mailOptions, function(error, res){
        if (error){
            console.log(error);
            res.send("email not send due to:"+error);
        } else {
            console.log("Email sent");
            res.send("email send ok");
        }
    });
};
