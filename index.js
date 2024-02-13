const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const porta = 443;

app.get("/", (req, res) => {
  res.send("Enviando e-mail com o Nodemailer!");
});

app.get("/sendemail", async (req, res) => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ca7fd966b00c39",
      pass: "3dab996008e1fd",
    },
  })

  var message = {
    from: "noreply@a4ndev.com",
    to: "aldrinreisdemorais@gmail.com",
    subject: "Texte MailAPI",
    text: "Olá. \n \n Você Solicitou a alteração de senha.",
    html: "Prezado, <br><br> Você solicitou a Alteração de Senha",
  }

  transport.sendMail(message, function (err) {
    if (err)
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: E-mail não enviado!",
      })
    else
      return res.json({
        erro: false,
        mensagem: "E-mail enviado com sucesso!",
      })
  })

  
});

app.listen(porta, () => {
  console.log("Servidor rodando");
});
