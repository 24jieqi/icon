import React from 'react'
const CrossOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      focusable="false"
      width="1em"
      height="1em"
      fill="currentColor">
      <path d="M806.144 217.856a32 32 0 0 1 2.858667 41.984l-2.858667 3.242667L557.269333 512l248.874667 248.917333a32 32 0 0 1-41.984 48.085334l-3.242667-2.858667L512 557.269333l-248.917333 248.874667a32 32 0 0 1-48.085334-41.984l2.858667-3.242667L466.730667 512 217.856 263.082667A32 32 0 0 1 259.84 215.04l3.242667 2.858667L512 466.730667l248.917333-248.874667a32 32 0 0 1 45.226667 0z" />
    </svg>
  )
}
export default CrossOutline
