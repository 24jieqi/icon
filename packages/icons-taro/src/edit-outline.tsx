import React from 'react'

import { genOutlineIcon } from './gen'

const EditOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
  <path d="m32.479 6.372-1.79-1.79a.281.281 0 0 0-.398 0L12.99 21.884a.281.281 0 0 0 0 .398l1.79 1.79c.11.11.288.11.398 0L32.479 6.77a.281.281 0 0 0 0-.398zm-14.444-.618a.281.281 0 0 0-.281-.281H6.75a2.25 2.25 0 0 0-2.25 2.25v22.57a2.25 2.25 0 0 0 2.25 2.25h22.57a2.25 2.25 0 0 0 2.25-2.25V19.289a.281.281 0 0 0-.28-.281h-2.532a.281.281 0 0 0-.281.281v10.16H7.594V8.566h10.16a.281.281 0 0 0 .281-.28z" fill="${color}" fill-rule="evenodd" />
  </svg>`
})
export default EditOutline
