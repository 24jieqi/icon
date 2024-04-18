import React from 'react'

import { genOutlineIcon } from './gen'

const CorrectOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <defs ><clipPath id="d9c7f__a"><rect rx="0" height="32" width="32" /></clipPath></defs><g clip-path="url(#d9c7f__a)"><path fill="${color}" fill-rule="evenodd" d="M31.246 8.852c-6.912 4.772-12.492 10.343-17.276 17.246-1.26 1.817-3.963 1.763-5.15-.1-2.12-3.332-4.67-5.868-8.012-7.97-1.608-1.011-.62-3.497 1.243-3.131 3.6.707 6.462 2.143 9.184 4.607a48.256 48.256 0 0 1 18.371-13.64c1.9-.803 3.336 1.817 1.64 2.987Z" /></g>
  </svg>`
})
export default CorrectOutline
