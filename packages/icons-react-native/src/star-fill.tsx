import React from 'react'
import { Svg, G, Path } from 'react-native-svg'

import { genFillIcon } from './gen'

const StarFill = genFillIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <G fill={color}>
        <Path d="M14.76 8.054q.022.04.059.066.036.027.08.035l5.3.996q.027.005.051.017.025.012.045.03.02.017.035.04.015.022.023.048.008.026.01.052 0 .027-.005.054-.006.026-.019.05-.012.023-.03.043l-3.703 3.921q-.031.033-.045.076-.014.043-.008.087l.69 5.349q.004.027 0 .053-.004.027-.014.052-.011.025-.028.046-.017.02-.039.036-.021.016-.047.026-.025.01-.052.012-.026.002-.053-.002-.026-.005-.05-.017l-4.874-2.31q-.041-.018-.086-.018-.045 0-.086.019l-4.873 2.31q-.025.01-.051.016-.027.004-.053.002-.027-.003-.052-.012-.026-.01-.047-.026-.022-.015-.039-.036-.017-.021-.027-.046-.011-.025-.015-.052-.004-.026 0-.053l.69-5.349q.006-.044-.008-.087t-.045-.076l-3.702-3.92q-.019-.02-.031-.044-.013-.024-.019-.05-.006-.027-.005-.054.002-.026.01-.052t.023-.048q.015-.023.035-.04.02-.018.045-.03.024-.012.05-.017l5.3-.996q.045-.008.081-.035.037-.026.058-.066l2.585-4.733q.013-.023.032-.043.019-.02.042-.033.023-.014.05-.02.025-.008.052-.008.027 0 .053.007t.049.021q.023.014.042.033.019.02.032.043z" />
        <Path d="M15.639 7.575q-.182-.333-.555-.403l5.3.996q.7.132.92.809.22.677-.269 1.195l-3.702 3.921q.26-.276.212-.652l.69 5.349q.091.706-.485 1.124-.576.419-1.219.114l-4.874-2.31q.343.163.686 0l-4.874 2.31q-.643.305-1.22-.114-.575-.418-.484-1.124l.69-5.349q-.048.376.212.652l-3.702-3.921q-.489-.518-.269-1.195.22-.677.92-.809l5.3-.996q-.373.07-.554.403l2.585-4.733q.341-.625 1.053-.625t1.053.625l2.585 4.733zm-1.756.959L11.298 3.8q.227.416.702.416t.702-.416l-2.585 4.733q-.273.499-.832.604l-5.3.996q.466-.088.613-.539.147-.451-.179-.796l3.702 3.92q.39.414.318.978l-.69 5.349q.06-.47-.324-.75-.384-.279-.812-.075l4.873-2.31q.514-.243 1.028 0l4.873 2.31q-.428-.204-.812.075-.384.28-.324.75l-.69-5.349q-.073-.564.318-.977l3.702-3.921q-.326.345-.18.796.148.451.614.539l-5.3-.996q-.56-.105-.832-.604z" />
      </G>
    </Svg>
  )
})
export default StarFill