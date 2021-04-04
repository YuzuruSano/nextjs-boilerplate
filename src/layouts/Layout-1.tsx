import Header from '~/layouts/Header';
import Footer from '~/layouts/Footer';
import tw, { css } from 'twin.macro'

const Layout = (Page: any) => {
  return () => (
    <>
      <Header />
      <main>
        <p>chnage layout sample</p>
      <Page />
      </main>
      <Footer />
    </>
  )
}
export default Layout;