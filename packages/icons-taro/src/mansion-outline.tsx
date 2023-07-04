import React from 'react'

import { genOutlineIcon } from './gen'

const MansionOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <path d="M20.022 5.06A2.06 2.06 0 0 0 17.962 3H7.151a2.06 2.06 0 0 0-2.06 2.06v21.654H3.257a.257.257 0 0 0-.257.258v1.866c0 .142.115.258.257.258h26.257a.257.257 0 0 0 .257-.258v-1.866a.257.257 0 0 0-.257-.258h-1.802V14.326a2.06 2.06 0 0 0-2.06-2.059h-5.63V5.059zm-2.317.256H7.408V26.49h10.297V5.316zm-2.06 5.117a.257.257 0 0 0-.257-.257H9.725a.257.257 0 0 0-.257.257v2.06c0 .142.115.257.257.257h5.663a.257.257 0 0 0 .258-.257v-2.06zm9.75 4.151h-5.341v12.13h5.341v-12.13zm-10.007 1.802c.143 0 .258.115.258.257v2.06a.257.257 0 0 1-.258.257H9.725a.257.257 0 0 1-.257-.258v-2.059c0-.142.115-.257.257-.257h5.663z" fill-rule="evenodd" fill="${color}" />
  </svg>`
})
export default MansionOutline
