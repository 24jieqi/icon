import React from 'react'

import { genOutlineIcon } from './gen'

const WomanOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <circle r="5.5" cx="12" cy="9.5" stroke="${color}" stroke-width="${strokeWidth || 2}" /><g fill="${color}" fill-rule="evenodd"><path d="M11 21v-6h2v6z" /><path d="M16.5 19h-9v-2h9z" /></g>
  </svg>`
})
export default WomanOutline
