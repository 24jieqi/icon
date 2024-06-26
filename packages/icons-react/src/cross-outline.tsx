import React from 'react'
const CrossOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="cross"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M806.144 217.856a32 32 0 0 1 2.859 41.984l-2.859 3.243L557.269 512l248.875 248.917a32 32 0 0 1-41.984 48.086l-3.243-2.859L512 557.269 263.083 806.144a32 32 0 0 1-48.086-41.984l2.859-3.243L466.731 512 217.856 263.083a32 32 0 0 1 41.984-48.043l3.243 2.859L512 466.73l248.917-248.875a32 32 0 0 1 45.227 0z"
        fill="currentColor"
      />
    </svg>
  )
}
export default CrossOutline
