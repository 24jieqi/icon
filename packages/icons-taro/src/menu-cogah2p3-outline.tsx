import React from 'react'

import { genOutlineIcon } from './gen'

const MenuCogah2p3Outline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <path d="M3 5h18M3 12h14M3 19h18" stroke="${color}" stroke-width="${strokeWidth || 2}" stroke-linecap="round" />
  </svg>`
})
export default MenuCogah2p3Outline
