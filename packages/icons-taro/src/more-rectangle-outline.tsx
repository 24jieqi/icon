import React from 'react'

import { genOutlineIcon } from './gen'

const MoreRectangleOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <path d="M11 10h2v4h-2zm-6 0h2v4H5zm12 0h2v4h-2z" fill="${color}" />
  </svg>`
})
export default MoreRectangleOutline
