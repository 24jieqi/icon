import React from 'react'

import { genOutlineIcon } from './gen'

const CircleOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <defs ><clipPath id="e2735__a"><rect rx="0" height="32" width="32" /></clipPath></defs><g clip-path="url(#e2735__a)"><circle stroke-width="${strokeWidth || 2.67}" stroke="${color}" cy="16" cx="16" r="12.665" /></g>
  </svg>`
})
export default CircleOutline
