import React from 'react'

import { genFillIcon } from './gen'

const FilterFill = genFillIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <path d="M20.52 17.625v3.87a.5.5 0 0 1-.247.431l-7.438 4.352a.5.5 0 0 1-.752-.431v-8.222L5.08 6.771A.5.5 0 0 1 5.5 6h21.602a.5.5 0 0 1 .42.771L20.52 17.625z" fill-rule="evenodd" fill="${color}" />
  </svg>`
})
export default FilterFill
