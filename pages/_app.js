import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Shoppingcart from '@/components/shoppingcart'
import Svg from '@/components/svg'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Svg />
      <Component {...pageProps} />
      <Shoppingcart />
      <Footer />
    </>
  )
}
