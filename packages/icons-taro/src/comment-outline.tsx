import React from 'react'

import { genOutlineIcon } from './gen'

const CommentOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
  <path d="M2.5 3.5v8H5v2l2.667-2H13.5v-8zm1 7H6v1l1.333-1H12.5v-6h-9z" fill="${color}" fill-rule="evenodd" />
  </svg>`
})
export default CommentOutline
