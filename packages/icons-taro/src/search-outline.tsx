import React from 'react'

import { genOutlineIcon } from './gen'

const SearchOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <path d="M28 15.5C28 8.596 22.404 3 15.5 3S3 8.596 3 15.5 8.596 28 15.5 28c2.84 0 5.46-.947 7.558-2.543l.075-.057 3.172 3.172.009.008a.5.5 0 0 0 .698-.008l1.591-1.59.008-.01a.5.5 0 0 0-.008-.698l-3.176-3.177A12.445 12.445 0 0 0 28 15.5zm-2.573 7.598-.02.026.02-.026zM5.75 15.5c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75z" fill-rule="evenodd" fill="${color}" />
  </svg>`
})
export default SearchOutline
