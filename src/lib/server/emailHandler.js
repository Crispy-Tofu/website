import nodemailer from 'nodemailer';


  
  async function sendEmail(data) {

    const naam = data.get('name');
    const email = data.get('email');
    const apparaat = data.get('apparaat');
    const defect = data.get('probleem');

    let transporter = nodemailer.createTransport({
      host: "mail.mijndomein.nl",
      port: 465,
      secure: true,
      auth: {
        user: "info@solelectronics.nl",
        pass: "ZJHf0fEEHkWd2cxrKaOo",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        return error;
      } else {
        console.log("Server is ready to take our messages");
      }
    });
  
    let message = {
      from: "info@solelectronics.nl",
      to: "info@solelectronics.nl",
      subject: "Een nieuwe reparatie",
      html: `<h1>Contact Form</h1><br>
      <b>Name</b>: ${naam} <br> 
      <b>Email</b>: ${email}<br>
      <b>Apparaat</b>: ${apparaat}<br>
      <b>Message</b>: ${defect}`,
    };
  
    let info = await transporter.sendMail(message);
    return info;
  }
  
  export { sendEmail };

