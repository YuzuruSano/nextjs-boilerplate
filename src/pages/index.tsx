import Layout from '~/pages/components/layouts/Layout';//ここでレイアウトの変更可能
import Image from 'next/image'
import {btn, btnRed} from '~/pages/components/Btn'
import tw, { css } from 'twin.macro'

const Index = () => (
  <div>
    <a href="" css={[btnRed, tw`block`, tw`w-1`]}>test</a>
    <a href="" css={btn}>tst</a>
  </div>
)

export default Layout(Index);