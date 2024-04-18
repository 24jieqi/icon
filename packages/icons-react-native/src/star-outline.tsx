import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const StarOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        d="M15.639 7.575q-.182-.333-.555-.403l5.3.996q.7.132.92.809.22.677-.269 1.195l-3.702 3.921q.26-.276.212-.652l.69 5.349q.091.706-.485 1.124-.576.419-1.219.114l-4.874-2.31q.343.163.686 0l-4.874 2.31q-.643.305-1.22-.114-.575-.418-.484-1.124l.69-5.349q-.048.376.212.652l-3.702-3.921q-.489-.518-.269-1.195.22-.677.92-.809l5.3-.996q-.373.07-.554.403l2.585-4.733q.341-.625 1.053-.625t1.053.625l2.585 4.733zm-1.756.959L11.298 3.8q.227.416.702.416t.702-.416l-2.585 4.733q-.273.499-.832.604l-5.3.996q.466-.088.613-.539.147-.451-.179-.796l3.702 3.92q.39.414.318.978l-.69 5.349q.06-.47-.324-.75-.384-.279-.812-.075l4.873-2.31q.514-.243 1.028 0l4.873 2.31q-.428-.204-.812.075-.384.28-.324.75l-.69-5.349q-.073-.564.318-.977l3.702-3.921q-.326.345-.18.796.148.451.614.539l-5.3-.996q-.56-.105-.832-.604z"
        fill={color}
      />
    </Svg>
  )
})
export default StarOutline
