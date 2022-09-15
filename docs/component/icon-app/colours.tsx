import React from 'react'

import {
  AlipayColours,
  ArrearsCircleColours,
  BankCardCircleColours,
  NewColours,
  SuccessCircleColours,
  TransferCircleColours,
  WeChatPayColours,
  YuanCircleColours,
} from '@fruits-chain/icons-react-native'

import Code from '../icon/code'

const icons: { name: string; Component: any }[] = [
  { name: 'AlipayColours', Component: AlipayColours },
  { name: 'ArrearsCircleColours', Component: ArrearsCircleColours },
  { name: 'BankCardCircleColours', Component: BankCardCircleColours },
  { name: 'NewColours', Component: NewColours },
  { name: 'SuccessCircleColours', Component: SuccessCircleColours },
  { name: 'TransferCircleColours', Component: TransferCircleColours },
  { name: 'WeChatPayColours', Component: WeChatPayColours },
  { name: 'YuanCircleColours', Component: YuanCircleColours },
]

const Colours: React.FC = () => {
  return <Code icons={icons} currentColor={false} />
}

export default Colours
