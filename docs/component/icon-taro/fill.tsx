import React from 'react'

import {
  ArrowDownFill,
  ArrowUpFill,
  CameraFill,
  CertificateFill,
  CommentFill,
  CrossFill,
  FilterFill,
  GrassFill,
  LikeFill,
  LocationFill,
  PhoneFill,
  SafetyFill,
  StarFill,
  SuccessFill,
  TimeFill,
  WarningFill,
  YuanCircleFill,
} from '@fruits-chain/icons-taro'

import Code from '../icon/code'

const icons: { name: string; Component: any }[] = [
  { name: 'ArrowDownFill', Component: ArrowDownFill },
  { name: 'ArrowUpFill', Component: ArrowUpFill },
  { name: 'CameraFill', Component: CameraFill },
  { name: 'CertificateFill', Component: CertificateFill },
  { name: 'CommentFill', Component: CommentFill },
  { name: 'CrossFill', Component: CrossFill },
  { name: 'FilterFill', Component: FilterFill },
  { name: 'GrassFill', Component: GrassFill },
  { name: 'LikeFill', Component: LikeFill },
  { name: 'LocationFill', Component: LocationFill },
  { name: 'PhoneFill', Component: PhoneFill },
  { name: 'SafetyFill', Component: SafetyFill },
  { name: 'StarFill', Component: StarFill },
  { name: 'SuccessFill', Component: SuccessFill },
  { name: 'TimeFill', Component: TimeFill },
  { name: 'WarningFill', Component: WarningFill },
  { name: 'YuanCircleFill', Component: YuanCircleFill },
]

const Fill: React.FC = () => {
  return <Code icons={icons} currentColor={false} />
}

export default Fill
