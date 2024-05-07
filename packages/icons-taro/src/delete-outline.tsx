import React from 'react'

import { genOutlineIcon } from './gen'

const DeleteOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <path d="M5 10v12h14V10m-4.5 0v7m-5-7v7M3 6h18" stroke="${color}" stroke-width="${strokeWidth || 2}" stroke-linecap="round" stroke-linejoin="round" /><path d="M8 6V2h8v4" stroke="${color}" stroke-width="${strokeWidth || 2}" stroke-linejoin="round" />
  </svg>`
})
export default DeleteOutline
