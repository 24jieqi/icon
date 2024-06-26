import React from 'react'
const InventoryRecordsOutline: React.FC<
  React.SVGProps<SVGSVGElement>
> = props => {
  return (
    <svg
      {...props}
      id="inventory-records"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M831.994 96c17.496 0 31.713 14.042 32 31.47V384c0 17.673-14.327 32-32 32-17.497 0-31.713-14.042-31.996-31.47l-.004-.53-.001-224.001h-576V864h576v-96c0-17.496 14.042-31.713 31.471-31.996l.53-.004c17.496 0 31.713 14.042 32 31.47V896c0 17.496-14.042 31.713-31.471 32h-640.53c-17.496 0-31.712-14.042-32-31.47V128c0-17.496 14.042-31.713 31.471-32h640.53z"
        fill="currentColor"
      />
      <path
        d="M511.994 416h-192c-17.673 0-32 14.327-32 32v256c0 17.673 14.327 32 32 32h192c17.673 0 32-14.327 32-32V448c0-17.673-14.327-32-32-32zm-32.001 64v192h-128V479.999h128zm210.072 160.673 213.691-213.691c12.497-12.497 32.759-12.497 45.255 0 12.497 12.496 12.497 32.758 0 45.255L735.32 685.927a12.8 12.8 0 0 1-2.834 2.14l-61.094 33.94c-6.18 3.434-13.973 1.207-17.406-4.973a12.8 12.8 0 0 1 0-12.431l33.94-61.095a12.8 12.8 0 0 1 2.14-2.835z"
        fill="currentColor"
      />
    </svg>
  )
}
export default InventoryRecordsOutline
