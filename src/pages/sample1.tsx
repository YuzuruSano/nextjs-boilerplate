import Layout from '~/pages/components/layouts/Layout-1';//ここでレイアウトの変更可能
import Image from 'next/image'
import {btn, btnRed} from '~/pages/components/Btn'
import tw, { css } from 'twin.macro'

const Sample1 = () => (
  <div>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam illo ipsa suscipit libero iure nihil voluptas maiores corporis voluptates earum eos perspiciatis adipisci, a quisquam iste! Nisi minima aliquid suscipit.</p>
  </div>
)

export default Layout(Sample1);