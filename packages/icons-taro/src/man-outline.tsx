import React from 'react'

import { genOutlineIcon } from './gen'

const ManOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <circle r="5.5" cx="10.5" cy="13.5" stroke="${color}" stroke-width="${strokeWidth || 2}" /><path d="M18 7.414V10h2V4h-6v2h2.586l-3.293 3.293 1.414 1.414z" fill="${color}" fill-rule="evenodd" />
  </svg>`
})
export default ManOutline
