import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
dotenv.config()

const sendEmail = async (email: any, html: any) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASS_EMAIL
    }
  })
  const emailSender: any = {
    from: process.env.USER_EMAIL,
    to: `${email}`,
    subject: 'Cập nhật mật khẩu', // tiêu đề
    text: 'Bạn đã nhập được email này từ ' + email,
    html: html
  }
  const info = await transporter.sendMail(emailSender)
  return info
}
export default sendEmail
