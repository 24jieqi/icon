import React from 'react'

import { genOutlineIcon } from './gen'

const SwapOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <path fill="${color}" fill-rule="evenodd" d="M20.269 4.5v2.64h-9.831A8.437 8.437 0 0 0 2 15.576h2.75a5.687 5.687 0 0 1 5.688-5.688h9.83v2.615a.5.5 0 0 0 .8.4l5.352-4.002a.5.5 0 0 0 0-.8L21.069 4.1a.5.5 0 0 0-.8.4zM28.5 14.827a.5.5 0 0 1 .5.5v.25h-.004l-.001.125A8.438 8.438 0 0 1 20.559 24h-9.831v2.64a.5.5 0 0 1-.8.4l-5.352-4.002a.5.5 0 0 1 0-.8l5.352-4.002a.5.5 0 0 1 .8.4v2.614h9.83a5.687 5.687 0 0 0 5.688-5.687h.004v-.236a.5.5 0 0 1 .5-.5h1.75zm-23.75.75v.25a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5v-.25h2.75z" />
  </svg>`
})
export default SwapOutline
