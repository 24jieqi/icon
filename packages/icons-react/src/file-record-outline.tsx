import React from 'react'
const FileRecordOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="file-record"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M671.994 96h-480c-17.673 0-32 14.327-32 32v768c0 17.673 14.327 32 32 32h640c17.673 0 32-14.327 32-32V320a32 32 0 0 0-7.417-20.486l-160-192A32 32 0 0 0 671.994 96zm-14.989 64 142.988 171.586V864h-576V159.999h433.012z"
        fill="currentColor"
      />
      <path
        d="M512 416H320c-17.673 0-32 14.327-32 32v256c0 17.673 14.327 32 32 32h192c17.673 0 32-14.327 32-32V448c0-17.673-14.327-32-32-32zm-32 64v192H351.999V479.999H480zM639.994 96c17.496 0 31.713 14.042 31.995 31.47l.004.53v160h128.268c17.496 0 31.713 14.042 31.996 31.47l.004.53c0 17.496-14.042 31.713-31.47 31.996l-.53.004H639.994c-17.497 0-31.713-14.042-31.996-31.47l-.004-.53V128c0-17.673 14.327-32 32-32z"
        fill="currentColor"
      />
    </svg>
  )
}
export default FileRecordOutline
