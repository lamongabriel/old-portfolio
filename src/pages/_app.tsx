import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App ({ Component, pageProps }: AppProps) {
  return (
		<>
			<Component {...pageProps} />
			<ToastContainer />
		</>
  )
}

export default appWithTranslation(App)
