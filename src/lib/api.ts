import axios from 'axios'

interface ContactFormData {
  name: string
  email: string
  subject: string
  body: string
}

export const sendContactForm = async (data: ContactFormData) => {
  axios.post('/api/contact', data, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
}
