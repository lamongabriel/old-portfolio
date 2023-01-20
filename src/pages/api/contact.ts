import axios from 'axios'

import { NextApiRequest, NextApiResponse } from 'next'
import { ContactFormDataValidation } from '../../@types/form'
import { mailOptions, transport } from '../../config/nodemailer'

async function validateHuman (token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_API as string
  const { data } = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`)

  return data.success
}

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body as ContactFormDataValidation

    if (!data.name || !data.email || !data.subject || !data.body) {
      return res.status(400).json({ message: 'Missing fields.' })
    }

    const human = await validateHuman(data.token)
    if (!human) {
      return res.status(400).json({ message: 'Invalid, bot detected.' })
    }

    const messageText = `E-mail: ${data.email}\nName: ${data.name}\n\nMessage: ${data.body}`

    try {
      await transport.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: messageText
      })

      return res.status(200).json({ message: 'Ok' })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: error })
    }
  }
  return res.status(400).json({ message: 'Bad request' })
}
