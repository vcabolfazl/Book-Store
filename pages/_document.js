import Footer from '@/components/Footer'
import Shoppingcart from '@/components/shoppingcart'
import Svg from '@/components/svg'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fa">
      <Head />
      <body dir='rtl'>
        <Main />
        <Svg />
        <NextScript />
        <Shoppingcart/>
        <Footer />
      </body>
    </Html>
  )
}
