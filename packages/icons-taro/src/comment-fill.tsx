import React from 'react'

import { genFillIcon } from './gen'

const CommentFill = genFillIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
  <g fill="${color}"><path d="M3 11h2.5v1.5l2-1.5H13V4H3z" /><path fill-rule="evenodd" d="M2.5 3.5v8H5v2l2.667-2H13.5v-8zm1 7H6v1l1.333-1H12.5v-6h-9z" /></g>
  </svg>`
})
export default CommentFill
