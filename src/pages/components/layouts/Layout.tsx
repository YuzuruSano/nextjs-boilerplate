import Header from '~/pages/components/layouts/Header';
import Footer from '~/pages/components/layouts/Footer';
import tw, { css } from 'twin.macro'

const Layout = (Page: EmotionJSX.Element) => {
  return () => (
    <>
      <Header />
      <main>
      <Page />
      </main>
      <Footer />
    </>
  )
}
export default Layout;