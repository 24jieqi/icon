import React from 'react'

import { genOutlineIcon } from './gen'

const LikeOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
  <path d="M2.5 12.5h9.39l1.75-7h-3.446l.917-2.753-1.737-.869L6.27 5.5H2.5zm1.75-1H3.5v-5h.75zm1 0h5.86l1.25-5H8.806L9.89 3.253l-.263-.131L6.73 6.5H5.25z" fill="${color}" fill-rule="evenodd" />
  </svg>`
})
export default LikeOutline
