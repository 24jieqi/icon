import React from 'react'

import { genOutlineIcon } from './gen'

const DeleatOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <path stroke-linejoin="round" stroke-linecap="round" stroke-width="${strokeWidth || 2}" stroke="${color}" d="M5 10v12h14V10m-4.5 0v7m-5-7v7M3 6h18" /><path stroke-linejoin="round" stroke-width="${strokeWidth || 2}" stroke="${color}" d="M8 6V2h8v4" />
  </svg>`
})
export default DeleatOutline
