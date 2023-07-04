import React from 'react'

import { genOutlineIcon } from './gen'

const Home2Outline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
  <clipPath id="d9c7c__a"><path d="M0 0h48v48H0z" /></clipPath><g clip-path="url(#d9c7c__a)"><path d="M27.707 32.293Q28 32.586 28 33v9q0 1.243.879 2.121Q29.757 45 31 45h6q3.314 0 5.657-2.343T45 37V19.46q0-2.142-1.07-3.997-1.069-1.854-2.922-2.927l-13-7.526Q26.148 3.933 24 3.933q-2.149 0-4.008 1.077l-13 7.526q-1.853 1.073-2.923 2.927Q3 17.319 3 19.46V37q0 3.314 2.343 5.657T11 45h6q1.243 0 2.121-.879Q20 43.243 20 42v-9q0-.414.293-.707T21 32h6q.414 0 .707.293zM32 41v-8q0-2.071-1.464-3.535Q29.07 28 27 28h-6q-2.071 0-3.535 1.464Q16 30.93 16 33v8h-5q-1.657 0-2.828-1.172Q7 38.657 7 37V19.46q0-1.071.535-1.999.534-.927 1.46-1.463l13-7.527q.93-.538 2.005-.538 1.074 0 2.004.538l13 7.527q.927.536 1.461 1.463.535.928.535 1.998V37q0 1.657-1.172 2.828Q38.657 41 37 41z" fill="${color}" fill-rule="evenodd" /></g>
  </svg>`
})
export default Home2Outline
