import React from 'react'
const TaskPanelOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="task-panel"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      focusable="false"
      width="1em"
      height="1em">
      <path d="M896 134.304c17.496 0 31.713 14.042 32 31.47v211.918c0 17.673-14.327 32-32 32-17.496 0-31.713-14.042-31.996-31.471l-.004-.53-.001-179.388h-704v473.696l401.896.001c17.497 0 31.714 14.042 31.996 31.47l.004.53c0 17.496-14.041 31.713-31.47 32H128c-17.496 0-31.713-14.042-32-31.47V166.303c0-17.496 14.042-31.713 31.47-32H896zm76.846 601.287c12.497 12.497 12.497 32.758 0 45.255s-32.758 12.497-45.255 0L814.454 667.709l45.255-45.255L972.846 735.59z" />
      <path d="M625.137 433.137c62.484-62.484 163.79-62.484 226.274 0 62.484 62.484 62.484 163.79 0 226.274-62.484 62.484-163.79 62.484-226.274 0-62.484-62.484-62.484-163.79 0-226.274zm45.255 45.255c-37.49 37.49-37.49 98.274 0 135.764 37.49 37.49 98.274 37.49 135.764 0 37.49-37.49 37.49-98.274 0-135.764-37.49-37.49-98.274-37.49-135.764 0zM678 803.2c17.673 0 32 14.327 32 32 0 17.496-14.042 31.713-31.47 31.996l-.53.004H346c-17.673 0-32-14.327-32-32 0-17.496 14.042-31.713 31.47-31.996l.53-.004h332zM608 320c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32H288c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32h320zM480 448c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32H288c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32h192z" />
    </svg>
  )
}
export default TaskPanelOutline
