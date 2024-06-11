import React from 'react'
const ReceiptOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="receipt"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M895.988 672c17.496 0 31.713 14.042 32 31.47V896c0 17.496-14.042 31.713-31.47 31.996l-.53.004H127.993c-17.496 0-31.713-14.042-32-31.47V704c0-17.496 14.042-31.713 31.47-31.996l.53-.004h92.33c1.241 0 2.466.07 3.67.208V128c0-17.673 14.326-32 31.999-32h511.997c17.673 0 32 14.327 32 32l-.001 544 96 .001zm-675.136 63.996-.529.004h-60.33v128h703.994V736h-63.999v31.995c0 17.673-14.326 32-32 32H255.993c-17.673 0-32-14.327-32-32v-32.203a32.5 32.5 0 0 1-3.14.204zm515.136-575.997H287.991v575.996h447.997V159.999zM607.994 512c17.496 0 31.713 14.042 31.995 31.47l.005.53c0 17.673-14.327 32-32 32h-192c-17.497 0-31.714-14.042-31.996-31.47l-.004-.53c0-17.673 14.326-32 32-32h192zm0-128c17.496 0 31.713 14.042 31.995 31.47l.005.53c0 17.673-14.327 32-32 32h-192c-17.497 0-31.714-14.042-31.996-31.47l-.004-.53c0-17.673 14.326-32 32-32h192zm0-128c17.496 0 31.713 14.042 31.995 31.47l.005.53c0 17.673-14.327 32-32 32h-192c-17.497 0-31.714-14.042-31.996-31.47l-.004-.53c0-17.673 14.326-32 32-32h192z"
        fill="currentColor"
      />
    </svg>
  )
}
export default ReceiptOutline