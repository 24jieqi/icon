import React from 'react'

import { genOutlineIcon } from './gen'

const CopyOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <path d="M26.7 4H7.258a.5.5 0 0 0-.49.49v1.52a.5.5 0 0 0 .49.49H25.55v18.265a.5.5 0 0 0 .489.49h1.521a.5.5 0 0 0 .49-.49V5.232a1.25 1.25 0 0 0-1.229-1.23h-.071l-.025-.001zm-5.32 4.766a1.9 1.9 0 0 1 1.901 1.9v15.448c0 1.05-.851 1.902-1.901 1.902H5.9A1.901 1.901 0 0 1 4 26.114V10.667a1.9 1.9 0 0 1 1.901-1.901zm-.714 2.615H6.613v14.021h14.053z" fill="${color}" fill-rule="evenodd" />
  </svg>`
})
export default CopyOutline
