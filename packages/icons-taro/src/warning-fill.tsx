import React from 'react'

import { genFillIcon } from './gen'

const WarningFill = genFillIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
  <path d="M24 3c11.598 0 21 9.402 21 21s-9.402 21-21 21S3 35.598 3 24 12.402 3 24 3zm-1.875 10.207a.375.375 0 0 1 .375-.363h3.012a.375.375 0 0 1 .363.375v14.074a.375.375 0 0 1-.375.363h-3.012a.375.375 0 0 1-.363-.375V13.22zM24 30.657a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25z" fill="${color}" fill-rule="evenodd" />
  </svg>`
})
export default WarningFill
