import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Neoden espace de flottaison</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
      </Head>
      <Nav />
      <div className='container'>
        <main className='main'>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
