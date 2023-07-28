import { Footer } from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
    {/* <Provider store={store}> */}
      {getLayout(<Component {...pageProps} />)}
    {/* </Provider> */}
    </SessionProvider>
  )
}




