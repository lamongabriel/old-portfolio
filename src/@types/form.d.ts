export interface ContactFormData {
  name: string
  email: string
  subject: string
  body: string
}

export interface ContactFormDataValidation extends ContactFormData {
  token: string
}
