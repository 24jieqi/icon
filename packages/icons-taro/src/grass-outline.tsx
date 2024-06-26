import React from 'react'

import { genOutlineIcon } from './gen'

const GrassOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <path d="M12 19v2H9q-2.9 0-4.95-2.05Q2 16.9 2 14v-2h3q2.9 0 4.95 2.05Q12 16.1 12 19zm-2 0H9q-2.071 0-3.536-1.464Q4 16.07 4 14h1q2.071 0 3.536 1.464Q10 16.93 10 19zm3.644-6.681-1.004 1.739-1.944-1.123q-2.51-1.45-3.261-4.25-.75-2.801.699-5.312l1.004-1.739 1.944 1.123q2.511 1.45 3.262 4.25.75 2.8-.7 5.312zm-1.736-.994-.212-.122q-1.793-1.036-2.33-3.036-.536-2 .5-3.794l.004-.007.212.123q1.794 1.035 2.33 3.036.536 2-.5 3.794zm3.142 3.725Q13 17.1 13 20v1h3q2.9 0 4.95-2.05Q23 16.9 23 14v-1h-3q-2.9 0-4.95 2.05zm.042 3.95H16q2.071 0 3.536-1.464 1.097-1.098 1.372-2.536H20q-2.071 0-3.536 1.464-1.097 1.098-1.372 2.536z" fill="${color}" fill-rule="evenodd" />
  </svg>`
})
export default GrassOutline
