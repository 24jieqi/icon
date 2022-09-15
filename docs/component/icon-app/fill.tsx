import React from 'react'

import {
  ArrowDownFill,
  ArrowLeftFill,
  ArrowRightFill,
  ArrowUpFill,
  CrossFill,
  DeleteFill,
  PlayCircleFill,
  SuccessFill,
} from '@fruits-chain/icons-react-native'

import Code from '../icon/code'

const icons: { name: string; Component: any }[] = [
  { name: 'ArrowDownFill', Component: ArrowDownFill },
  { name: 'ArrowLeftFill', Component: ArrowLeftFill },
  { name: 'ArrowRightFill', Component: ArrowRightFill },
  { name: 'ArrowUpFill', Component: ArrowUpFill },
  { name: 'CrossFill', Component: CrossFill },
  { name: 'DeleteFill', Component: DeleteFill },
  { name: 'PlayCircleFill', Component: PlayCircleFill },
  { name: 'SuccessFill', Component: SuccessFill },
]

const Fill: React.FC = () => {
  return <Code icons={icons} currentColor={false} />
}

export default Fill
