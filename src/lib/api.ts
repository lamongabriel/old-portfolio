import axios from 'axios'
import { ContactFormDataValidation } from '../@types/form'

export const sendContactForm = async (data: ContactFormDataValidation) => {
  axios.post('/api/contact', data, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
}
