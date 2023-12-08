import React from 'react'

import {
  AlipayColours,
  FreightCircleColours,
  WeChatPayColours,
  YuanCircleColours,
} from '@fruits-chain/icons-taro'

import Code from '../icon/code'

const icons: { name: string; Component: any }[] = [
  { name: 'AlipayColours', Component: AlipayColours },
  { name: 'FreightCircleColours', Component: FreightCircleColours },
  { name: 'WeChatPayColours', Component: WeChatPayColours },
  { name: 'YuanCircleColours', Component: YuanCircleColours },
]

const Colours: React.FC = () => {
  return <Code icons={icons} currentColor={false} />
}

export default Colours
