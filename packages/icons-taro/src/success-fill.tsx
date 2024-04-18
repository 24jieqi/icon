import React from 'react'

import { genFillIcon } from './gen'

const SuccessFill = genFillIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
  <path fill-rule="evenodd" fill="${color}" d="M24 45q.515 0 1.03-.025.515-.026 1.028-.076t1.023-.126q.51-.076 1.016-.177.505-.1 1.006-.225.5-.126.993-.275.493-.15.979-.324.485-.173.961-.37.477-.198.943-.418.466-.22.92-.464.455-.243.897-.508t.871-.551q.429-.287.843-.594t.812-.634q.399-.327.78-.673.383-.346.747-.71.365-.365.711-.747t.673-.78q.327-.4.634-.813.307-.414.594-.843.286-.429.551-.87.265-.443.508-.898.243-.454.464-.92.22-.466.418-.943.197-.476.37-.961.174-.486.324-.979.15-.493.275-.993.125-.5.226-1.006.1-.506.176-1.016.075-.51.126-1.023.05-.513.076-1.028Q45 24.515 45 24q0-.516-.025-1.03-.026-.515-.076-1.028t-.126-1.023q-.076-.51-.176-1.016-.101-.506-.226-1.006-.126-.5-.275-.993-.15-.493-.324-.979-.173-.485-.37-.961-.198-.477-.418-.943-.22-.466-.464-.92-.243-.455-.508-.897t-.551-.871q-.287-.429-.594-.843t-.634-.812q-.327-.399-.673-.78-.346-.383-.71-.747-.365-.365-.747-.711t-.78-.673q-.4-.327-.813-.634-.414-.307-.843-.594-.429-.286-.87-.551-.443-.265-.898-.508-.454-.243-.92-.464-.466-.22-.943-.417-.476-.198-.961-.371-.486-.174-.979-.324-.493-.15-.993-.275-.5-.125-1.006-.225-.506-.101-1.016-.177-.51-.075-1.023-.126-.513-.05-1.028-.076Q24.515 3 24 3q-.516 0-1.03.025-.515.026-1.028.076t-1.023.126q-.51.076-1.016.177-.506.1-1.006.225-.5.126-.993.275-.493.15-.979.324-.485.173-.961.37-.477.198-.943.418-.466.22-.92.464-.455.243-.897.508t-.871.551q-.429.287-.843.594t-.812.634q-.399.327-.78.673-.383.346-.747.71-.365.365-.711.747t-.673.78q-.327.4-.634.813-.307.414-.594.843-.286.429-.551.87-.265.443-.508.898-.243.454-.464.92-.22.466-.417.943-.198.476-.371.961-.174.486-.324.979-.15.493-.275.993-.125.5-.225 1.006-.101.506-.177 1.016-.075.51-.126 1.023-.05.513-.076 1.028Q3 23.484 3 24q0 .515.025 1.03.026.515.076 1.028t.126 1.023q.076.51.177 1.016.1.505.225 1.006.126.5.275.993.15.493.324.979.173.485.37.961.198.477.418.943.22.466.464.92.243.455.508.897t.551.871q.287.429.594.843t.634.812q.327.399.673.78.346.383.71.747.365.365.747.711t.78.673q.4.327.813.634.414.307.843.594.429.286.87.551.443.265.898.508.454.243.92.464.466.22.943.417.476.198.961.371.486.174.979.324.493.15.993.275.5.125 1.006.225.506.101 1.016.177.51.075 1.023.126.513.05 1.028.076Q23.484 45 24 45zm9.136-29.924a.375.375 0 0 1 .52.009l2.122 2.121.01.01a.375.375 0 0 1-.01.52L23.65 29.866a.372.372 0 0 1-.055.07l-2.121 2.12-.011.011a.374.374 0 0 1-.262.1h-.014a.374.374 0 0 1-.258-.11l-2.122-2.122-.012-.013a.38.38 0 0 1-.043-.056l-5.399-5.4-.01-.01a.375.375 0 0 1 .01-.52l2.121-2.121.01-.01a.375.375 0 0 1 .52.01l5.197 5.196 11.925-11.925z" />
  </svg>`
})
export default SuccessFill
