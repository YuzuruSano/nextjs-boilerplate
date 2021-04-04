import Header from '~/layouts/Header';
import Footer from '~/layouts/Footer';
import tw, { css } from 'twin.macro'

const Layout = (Page: any) => {
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