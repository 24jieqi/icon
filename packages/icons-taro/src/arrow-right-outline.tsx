import React from 'react'

import { genOutlineIcon } from './gen'

const ArrowRightOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <path d="m8 4 8 8-8 8" stroke="${color}" stroke-width="${strokeWidth || 2}" stroke-linecap="round" stroke-linejoin="round" />
  </svg>`
})
export default ArrowRightOutline
