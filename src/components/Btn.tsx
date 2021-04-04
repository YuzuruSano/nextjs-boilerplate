import tw, { css } from 'twin.macro'

export const btn = [
  css`
    padding:10px 20px;
    text-decoration: none;
    &:hover {
      transition: all .3s;
      opacity: 0.6;
    }`,
  tw`mx-auto`
]

export const btnRed = css`
  ${btn}
  border:1px solid red;
`
