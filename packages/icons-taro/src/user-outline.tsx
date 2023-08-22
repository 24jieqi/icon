import React from 'react'

import { genOutlineIcon } from './gen'

const UserOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <path d="M22.219 11.688a6.688 6.688 0 1 0-11.636 4.498A10.675 10.675 0 0 0 4 26.046v.642h.003a.188.188 0 0 0 .184.156h2.625c.093 0 .17-.068.185-.157H7v-.64l.001-.127a7.672 7.672 0 0 1 7.67-7.545h.861a6.67 6.67 0 0 0 4.94-2.18h.028l-.02-.009a6.663 6.663 0 0 0 1.739-4.498Zm-11.636 4.498Zm1.26-4.498a3.687 3.687 0 1 1 7.376 0 3.687 3.687 0 0 1-7.375 0Zm14.97 7.5a.25.25 0 0 1 .25.25v2a.25.25 0 0 1-.25.25h-7.25a.25.25 0 0 1-.25-.25v-2a.25.25 0 0 1 .25-.25h7.25Zm.25 5.25a.25.25 0 0 0-.25-.25h-9.5a.25.25 0 0 0-.25.25v2c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-2Z" fill-rule="evenodd" fill="${color}" fill-opacity=".85" />
  </svg>`
})
export default UserOutline
