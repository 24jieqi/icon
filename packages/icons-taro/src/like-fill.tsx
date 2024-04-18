import React from 'react'

import { genFillIcon } from './gen'

const LikeFill = genFillIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
  <g fill="${color}"><path d="M3 12h8.5L13 6H9.5l1-3-1-.5-3 3.5H3z" /><path fill-rule="evenodd" d="M2.5 12.5h9.39l1.75-7h-3.446l.917-2.753-1.737-.869L6.27 5.5H2.5zm8.61-1H3.5v-5h3.23l2.896-3.378.263.131L8.806 6.5h3.554z" /></g>
  </svg>`
})
export default LikeFill
