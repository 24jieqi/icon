import React from 'react'

import {
  ArrowDownFill,
  ArrowLeftFill,
  ArrowRightFill,
  ArrowUpFill,
  CommentFill,
  CrossFill,
  DeleteFill,
  GrassFill,
  LikeFill,
  LocationCircleFill,
  LocationFill,
  PlayCircleFill,
  PlusFill,
  StarFill,
  SuccessFill,
  UserFill,
  YuanCircleFill,
} from '@fruits-chain/icons-react-native'

import Code from '../icon/code'

const icons: { name: string; Component: any }[] = [
  { name: 'ArrowDownFill', Component: ArrowDownFill },
  { name: 'ArrowLeftFill', Component: ArrowLeftFill },
  { name: 'ArrowRightFill', Component: ArrowRightFill },
  { name: 'ArrowUpFill', Component: ArrowUpFill },
  { name: 'CommentFill', Component: CommentFill },
  { name: 'CrossFill', Component: CrossFill },
  { name: 'DeleteFill', Component: DeleteFill },
  { name: 'GrassFill', Component: GrassFill },
  { name: 'LikeFill', Component: LikeFill },
  { name: 'LocationCircleFill', Component: LocationCircleFill },
  { name: 'LocationFill', Component: LocationFill },
  { name: 'PlayCircleFill', Component: PlayCircleFill },
  { name: 'PlusFill', Component: PlusFill },
  { name: 'StarFill', Component: StarFill },
  { name: 'SuccessFill', Component: SuccessFill },
  { name: 'UserFill', Component: UserFill },
  { name: 'YuanCircleFill', Component: YuanCircleFill },
]

const Fill: React.FC = () => {
  return <Code icons={icons} currentColor={false} />
}

export default Fill
