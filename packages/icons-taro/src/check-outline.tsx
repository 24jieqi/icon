import React from 'react'

import { genOutlineIcon } from './gen'

const CheckOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
  <path d="M23.016 6.253a.437.437 0 0 1 .612-.007l.007.007 1.237 1.238c.169.168.171.44.007.611l-.007.007-14.076 14.076a.436.436 0 0 1-.3.128h-.009a.436.436 0 0 1-.3-.12l-.01-.008-7.424-7.424a.438.438 0 0 1-.007-.612l.007-.007 1.238-1.238a.437.437 0 0 1 .611-.007l.007.007 5.878 5.878 12.53-12.529z" fill="${color}" fill-rule="evenodd" />
  </svg>`
})
export default CheckOutline
