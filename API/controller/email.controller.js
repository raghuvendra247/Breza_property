import nodemailer from 'nodemailer'; 

function sendMailAPI(email,password)  
{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'raghuvendrapatel247@gmail.com',
    pass: 'qzicjtpkffdmqouy'
  }
});

var mailOptions = {
  from: 'raghuvendrapatel247@gmail.com', //amazone
  to: email,
  subject: 'Verification mail',
  html: "<h1>Welcome to Proerty Finder</h1><p>you have successfully register to our app , your login credentials are attached below</p><h2>Email : "+email+"</h2><h2>Password : "+password+"</h2><h1>Click on the link below to redirect </h1>http://localhost:3000/verifyuser/"+email
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

export default sendMailAPI;
