import React from 'react'

import { genOutlineIcon } from './gen'

const ChainOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.001 56" fill="none">
  <path d="M49.598 43.58A5.599 5.599 0 0 1 44 49.177a5.596 5.596 0 0 1-5.599-5.427c.005-.128.01-.256.01-.389 0-.049 0-.098-.005-.147a7.832 7.832 0 0 0-7.834-7.692c-.29 0-.577.015-.862.044-.005.005-.015.005-.025.005a3.57 3.57 0 0 0-.241.035c-.01 0-.015 0-.025.005-.103.01-.202.03-.3.044a7.78 7.78 0 0 1-1.128.084 7.841 7.841 0 0 1-7.84-7.84 7.843 7.843 0 0 1 6.954-7.79c.01 0 .02 0 .024-.004.286-.03.572-.045.862-.045a7.838 7.838 0 0 1 7.79 8.711 13.72 13.72 0 0 0-.073.507c.005.005 0 .01 0 .015a8.33 8.33 0 0 0-.045.862 7.838 7.838 0 0 0 7.84 7.84h.113c.104 0 .202-.006.3-.016H44a5.599 5.599 0 0 1 5.6 5.6z" fill-rule="evenodd" fill="${color}" /><path d="M28 11.203a5.6 5.6 0 0 0 5.6-5.6A5.61 5.61 0 0 0 28.29.006C28.193 0 28.1 0 28 0c-.098 0-.192 0-.29.005a5.608 5.608 0 0 0-5.186 4.427v.01a3.409 3.409 0 0 1-.083.507 4.474 4.474 0 0 1-4.373 3.516 4.47 4.47 0 0 1-2.458-.734q-.192-.126-.369-.266c-.005-.01-.015-.015-.025-.02a5.588 5.588 0 0 0-3.043-.896 5.587 5.587 0 0 0-4.146 1.837 5.604 5.604 0 0 0-.547 6.82 3.082 3.082 0 0 1 .212.295c.463.7.729 1.542.729 2.443a4.484 4.484 0 0 1-3.58 4.392c-.104.02-.212.04-.32.05A5.61 5.61 0 0 0 .005 27.58c0 .099-.005.202-.005.3V28a5.601 5.601 0 0 0 4.752 5.417h.005a4.48 4.48 0 0 1 3.792 4.426c0 .99-.325 1.91-.867 2.654-.01.01-.015.02-.024.03a5.57 5.57 0 0 0-1.089 3.319 5.6 5.6 0 1 0 11.198 0 5.593 5.593 0 0 0-4.732-5.53c-.01-.005-.02-.005-.03-.005a4.48 4.48 0 0 1-3.786-4.427c0-.99.325-1.91.866-2.654.01-.01.015-.02.025-.03a5.57 5.57 0 0 0 1.088-3.318 5.57 5.57 0 0 0-.862-2.99 3.537 3.537 0 0 1-.32-.447 4.405 4.405 0 0 1-.68-2.364 4.48 4.48 0 0 1 3.994-4.451c.01-.005.02-.005.03-.005a5.613 5.613 0 0 0 4.284-4.275c.02-.197.05-.393.099-.58a4.473 4.473 0 0 1 4.363-3.477c.92 0 1.772.276 2.487.753.004 0 .014.005.02.01.088.06.172.123.255.192a5.59 5.59 0 0 0 3.132.955zM50.401 33.7a5.6 5.6 0 0 0 5.6-5.604 5.598 5.598 0 0 0-4.684-5.525.435.435 0 0 0-.083-.01 4.487 4.487 0 0 1-3.733-4.416 4.453 4.453 0 0 1 .891-2.684 5.599 5.599 0 1 0-10.134-3.284 5.602 5.602 0 0 0 4.678 5.524c.03.01.06.015.089.015a4.479 4.479 0 0 1 2.89 7.022l-.074.104a5.542 5.542 0 0 0-1.044 3.254 5.6 5.6 0 0 0 5.604 5.604zM27.974 56a5.6 5.6 0 1 0 0-11.202 5.6 5.6 0 0 0 0 11.201z" fill-rule="evenodd" fill="${color}" />
  </svg>`
})
export default ChainOutline
