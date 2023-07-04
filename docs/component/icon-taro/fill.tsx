import React from 'react'

import {
  ArrowDownFill,
  ArrowUpFill,
  CertificateFill,
  CrossFill,
  FilterFill,
  LocationFill,
  PhoneFill,
  SafetyFill,
  SuccessFill,
  TimeFill,
  YuanCircleFill,
} from '@fruits-chain/icons-taro'

import Code from '../icon/code'

const icons: { name: string; Component: any }[] = [
  { name: 'ArrowDownFill', Component: ArrowDownFill },
  { name: 'ArrowUpFill', Component: ArrowUpFill },
  { name: 'CertificateFill', Component: CertificateFill },
  { name: 'CrossFill', Component: CrossFill },
  { name: 'FilterFill', Component: FilterFill },
  { name: 'LocationFill', Component: LocationFill },
  { name: 'PhoneFill', Component: PhoneFill },
  { name: 'SafetyFill', Component: SafetyFill },
  { name: 'SuccessFill', Component: SuccessFill },
  { name: 'TimeFill', Component: TimeFill },
  { name: 'YuanCircleFill', Component: YuanCircleFill },
]

const Fill: React.FC = () => {
  return <Code icons={icons} currentColor={false} />
}

export default Fill
