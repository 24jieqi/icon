import React from 'react'

import { genFillIcon } from './gen'

const PhoneFill = genFillIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <path d="M23.867 3C25.045 3 26 3.907 26 5.026v22.948C26 29.093 25.045 30 23.867 30H8.133C6.955 30 6 29.093 6 27.974V5.026C6 3.907 6.955 3 8.133 3z" fill="${color}" fill-rule="evenodd" /><rect fill="#fff" height="3" rx="1" width="7" x="13" y="23" />
  </svg>`
})
export default PhoneFill
