import React from 'react'

import { genOutlineIcon } from './gen'

const SettingOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <path d="m27.877 8.118-10.45-5.862a2 2 0 0 0-1.957 0L5.021 8.118A2 2 0 0 0 4 9.862V21.49a2 2 0 0 0 1.021 1.744l10.45 5.862a2 2 0 0 0 1.957 0l10.449-5.862a2 2 0 0 0 1.021-1.744V9.862a2 2 0 0 0-1.021-1.744zM16.449 4.86 6.75 10.302V21.05l9.7 5.441 9.698-5.441V10.302L16.45 4.86zm5.625 10.816a5.625 5.625 0 1 0-11.25 0 5.625 5.625 0 0 0 11.25 0zm-8.5 0a2.875 2.875 0 1 1 5.75 0 2.875 2.875 0 0 1-5.75 0z" fill-rule="evenodd" fill="${color}" />
  </svg>`
})
export default SettingOutline
