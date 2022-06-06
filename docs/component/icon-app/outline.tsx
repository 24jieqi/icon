import React from 'react'

import {
  ArrowDownOutline,
  ArrowLeftOutline,
  ArrowRightOutline,
  ArrowUpOutline,
  CircleOutline,
  ClickCopyOutline,
  CoordOutline,
  CopyOutline,
  CrossCircleOutline,
  CrossOutline,
  DeleatOutline,
  ExplainOutline,
  EyeCloseOutline,
  EyeOutline,
  FiltrateOutline,
  MobileScreenOutline,
  PlusOutline,
  QuestionCircleOutline,
  QuestionOutline,
  SPOOutline,
  SearchOutline,
  SuccessCircleOutline,
  SuccessOutline,
  SwapLeftOutline,
  SwapOutline,
  SwapRightOutline,
  TelephoneOutline,
  TimeCircleOutline,
  VolumeOutline,
  WarningCircleOutline,
  WeChatOutline,
} from '@fruits-chain/icons-react-native'

import Code from '../icon/code'

const icons: { name: string; Component: any }[] = [
  { name: 'ArrowDownOutline', Component: ArrowDownOutline },
  { name: 'ArrowLeftOutline', Component: ArrowLeftOutline },
  { name: 'ArrowRightOutline', Component: ArrowRightOutline },
  { name: 'ArrowUpOutline', Component: ArrowUpOutline },
  { name: 'CircleOutline', Component: CircleOutline },
  { name: 'ClickCopyOutline', Component: ClickCopyOutline },
  { name: 'CoordOutline', Component: CoordOutline },
  { name: 'CopyOutline', Component: CopyOutline },
  { name: 'CrossCircleOutline', Component: CrossCircleOutline },
  { name: 'CrossOutline', Component: CrossOutline },
  { name: 'DeleatOutline', Component: DeleatOutline },
  { name: 'ExplainOutline', Component: ExplainOutline },
  { name: 'EyeCloseOutline', Component: EyeCloseOutline },
  { name: 'EyeOutline', Component: EyeOutline },
  { name: 'FiltrateOutline', Component: FiltrateOutline },
  { name: 'MobileScreenOutline', Component: MobileScreenOutline },
  { name: 'PlusOutline', Component: PlusOutline },
  { name: 'QuestionCircleOutline', Component: QuestionCircleOutline },
  { name: 'QuestionOutline', Component: QuestionOutline },
  { name: 'SPOOutline', Component: SPOOutline },
  { name: 'SearchOutline', Component: SearchOutline },
  { name: 'SuccessCircleOutline', Component: SuccessCircleOutline },
  { name: 'SuccessOutline', Component: SuccessOutline },
  { name: 'SwapLeftOutline', Component: SwapLeftOutline },
  { name: 'SwapOutline', Component: SwapOutline },
  { name: 'SwapRightOutline', Component: SwapRightOutline },
  { name: 'TelephoneOutline', Component: TelephoneOutline },
  { name: 'TimeCircleOutline', Component: TimeCircleOutline },
  { name: 'VolumeOutline', Component: VolumeOutline },
  { name: 'WarningCircleOutline', Component: WarningCircleOutline },
  { name: 'WeChatOutline', Component: WeChatOutline },
]

const Outline: React.FC = () => {
  return <Code icons={icons} />
}

export default Outline
