import React from 'react'

import { genOutlineIcon } from './gen'

const DraftsOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <g fill="${color}" fill-rule="evenodd"><path d="M3 8v12h18V8zm2 10h14v-8H5z" /><path d="m5.417 4-1.75 6h16.666l-1.75-6zm.916 4h11.334l-.584-2H6.917z" /><path d="m7.72 8 1.5 6h5.56l1.5-6zm3.06 4-.5-2h3.44l-.5 2z" /></g>
  </svg>`
})
export default DraftsOutline
