import React from 'react'

import {
  OctangleUserFill,
  SuccessFill,
  YuanCircleFill,
} from '@fruits-chain/icons-react'

import Code from '../icon/code'

const icons: { name: string; Component: any }[] = [
  { name: 'OctangleUserFill', Component: OctangleUserFill },
  { name: 'SuccessFill', Component: SuccessFill },
  { name: 'YuanCircleFill', Component: YuanCircleFill },
]

const Fill: React.FC = () => {
  return <Code icons={icons} currentColor={true} />
}

export default Fill
