import React from 'react'
const ContainerOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="container"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="m191.507 136 736.709 4.967c17.412.117 31.5 14.125 31.784 31.472v505.416c0 17.497-14.042 31.714-31.47 32h-95.468v146.67c0 17.497-14.041 31.714-31.47 31.996l-.53.005H96c-17.673 0-32-14.327-32-32v-556.77c0-17.674 14.327-32 32-32l63.291-.001V168c0-17.58 14.171-31.831 31.684-32h.532zm577.555 195.755H128v492.77h641.062v-492.77zm-544.44 104.816c17.495 0 31.712 14.041 31.995 31.47l.004.53v241.027c0 17.673-14.327 32-32 32-17.496 0-31.713-14.042-31.996-31.471l-.004-.53V468.572c0-17.673 14.327-32 32-32zm223.91 0c17.496 0 31.712 14.041 31.995 31.47l.004.53v241.027c0 17.673-14.327 32-32 32-17.496 0-31.713-14.042-31.995-31.471l-.005-.53V468.572c0-17.673 14.327-32 32-32zm223.491 0c17.497 0 31.714 14.041 31.996 31.47l.004.53v241.027c0 17.673-14.326 32-32 32-17.496 0-31.713-14.042-31.995-31.471l-.005-.53V468.572c0-17.673 14.327-32 32-32zM223.291 200.216v67.539h577.771c17.497 0 31.714 14.042 31.996 31.471l.005.53-.001 346.099H896V204.751l-672.709-4.535z"
        fill="currentColor"
      />
    </svg>
  )
}
export default ContainerOutline
