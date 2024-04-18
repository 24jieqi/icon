import React from 'react'

import { genOutlineIcon } from './gen'

const WarningCircleOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <path stroke-linejoin="round" stroke-width="${strokeWidth || 2}" stroke="${color}" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z" /><path fill="${color}" d="M12 18.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" /><path stroke-linejoin="round" stroke-linecap="round" stroke-width="${strokeWidth || 2}" stroke="${color}" d="M12 6v8" />
  </svg>`
})
export default WarningCircleOutline
