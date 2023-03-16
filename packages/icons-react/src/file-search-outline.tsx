import React from 'react'
const FileSearchOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="file-search"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      focusable="false"
      width="1em"
      height="1em">
      <path
        fill="currentColor"
        d="M670.125 96a32 32 0 0 1 22.335 9.084l.363.36 151.67 152.623a32 32 0 0 1 9.291 21.697l.01.51 2.525 231.377c.19 17.672-13.979 32.154-31.651 32.347-17.495.19-31.864-13.695-32.337-31.12l-.01-.529-1.903-174.449h-135.51c-17.496 0-31.713-14.041-31.995-31.47l-.005-.53V160H195.042l.948 704h427.186c17.496 0 31.713 14.042 31.996 31.47l.004.53c0 17.496-14.042 31.713-31.47 32H164.032c-17.48 0-31.69-14.016-31.995-31.428l-.005-.529-1.033-768c-.024-17.513 14.025-31.756 31.47-32.043h507.655zM649.47 507.559c88.366 0 160 71.634 160 160 0 32.086-9.445 61.966-25.706 87.012l99.36 101.373c12.37 12.622 12.168 32.882-.454 45.253-12.495 12.247-32.477 12.17-44.879-.079l-.373-.375-98.506-100.5C713.378 817.49 682.6 827.56 649.47 827.56c-88.366 0-160-71.635-160-160 0-88.366 71.634-160 160-160zm0 64c-53.02 0-96 42.98-96 96 0 53.019 42.98 96 96 96s96-42.981 96-96c0-53.02-42.98-96-96-96zm37.439-381.274V273.9h83.093l-83.093-83.615z"
      />
    </svg>
  )
}
export default FileSearchOutline
