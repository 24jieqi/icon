import React from 'react'

import { genOutlineIcon } from './gen'

const ExportOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <g fill="${color}" fill-rule="evenodd"><path d="M6 8h5V6H4v14h14v-7h-2v5H6z" /><path d="M18 7.414V10h2V4h-6v2h2.586l-3.293 3.293 1.414 1.414z" /></g>
  </svg>`
})
export default ExportOutline
