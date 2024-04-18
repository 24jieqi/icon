import React from 'react'

import { genOutlineIcon } from './gen'

const HexagonBarOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <g fill="${color}"><path d="m12.5 3.134 7.428 4.289v9.154L12 21.155l-7.928-4.578V7.423L12 2.845zm-1 1.732L12 4l.5.866-6.928 4-.5-.866h1v8h-1l.5-.866 6.928 4L12 20l-.5-.866 6.928-4 .5.866h-1V8h1l-.5.866z" /><path d="M11 9.5h2v5h-2z" /></g>
  </svg>`
})
export default HexagonBarOutline
