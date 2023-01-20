import { createTransport } from 'nodemailer'

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS

export const transport = createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass
  }
})

export const mailOptions = {
  from: email,
  to: 'gabriel-lamon@outlook.com'
}
