import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'] })

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <main className={nunito.className}>
          <Component {...pageProps} />
        </main>
      )
}

export default MyApp;
