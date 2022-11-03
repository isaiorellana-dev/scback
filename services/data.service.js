const config = require('../config.js');
const express = require('express');
const nodemailer = require('nodemailer');
class DataService {
  constructor(data, file) {
    this.data = data
    this.file = file
  }

  async sendMail(data, file) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        user: config.MAIL_USER,
        pass: config.MAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: config.FROM_MAIL,
      to: config.TO_MAIL,
      subject: 'Aplicacion de trabajo',
      text: `Datos:
      Nombre: ${data.name}

      Email: ${data.email}

      Telefono: ${data.phone}

      Puesto al que aplica: ${data.vacant}

      Link a portafolio: ${data.link}

      Comentario: ${data.comment}
      `,
      attachments: [
        file
      ]
    });
    console.log(data)
    return { message: 'mail sended', data };
  }
}

module.exports = DataService;