import { NextApiRequest, NextApiResponse } from 'next'
import { ContactFormData } from '../../@types/form'
import { mailOptions, transport } from '../../config/nodemailer'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body as ContactFormData

    if (!data.name || !data.email || !data.subject || !data.body) {
      return res.status(400).json({ message: 'Missing fields.' })
    }

    try {
      await transport.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: data.body,
        html: '<h1>Test title</h1><p>Some text</p>'
      })

      return res.status(200).json({ message: 'Ok' })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: error })
    }
  }
  return res.status(400).json({ message: 'Bad request' })
}
