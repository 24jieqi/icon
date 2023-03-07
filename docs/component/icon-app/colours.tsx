import React from 'react'

import {
  AlipayColours,
  BankCardCircleColours,
  CircleDisabledColours,
  CircleJingColours,
  CircleQiColours,
  CircleQianColours,
  CircleXieColours,
  CircleZhongColours,
  CircleZhuanColours,
  CircleZhuangColours,
  ExcelColours,
  NewColours,
  PDFColours,
  QQColours,
  SuccessCircleColours,
  TransferCircleColours,
  VideoColours,
  WeChatCircleOfFriendsColours,
  WeChatColours,
  WeChatPayColours,
  WeiboColours,
  WordColours,
  YuanCircleColours,
} from '@fruits-chain/icons-react-native'

import Code from '../icon/code'

const icons: { name: string; Component: any }[] = [
  { name: 'AlipayColours', Component: AlipayColours },
  { name: 'BankCardCircleColours', Component: BankCardCircleColours },
  { name: 'CircleDisabledColours', Component: CircleDisabledColours },
  { name: 'CircleJingColours', Component: CircleJingColours },
  { name: 'CircleQiColours', Component: CircleQiColours },
  { name: 'CircleQianColours', Component: CircleQianColours },
  { name: 'CircleXieColours', Component: CircleXieColours },
  { name: 'CircleZhongColours', Component: CircleZhongColours },
  { name: 'CircleZhuanColours', Component: CircleZhuanColours },
  { name: 'CircleZhuangColours', Component: CircleZhuangColours },
  { name: 'ExcelColours', Component: ExcelColours },
  { name: 'NewColours', Component: NewColours },
  { name: 'PDFColours', Component: PDFColours },
  { name: 'QQColours', Component: QQColours },
  { name: 'SuccessCircleColours', Component: SuccessCircleColours },
  { name: 'TransferCircleColours', Component: TransferCircleColours },
  { name: 'VideoColours', Component: VideoColours },
  {
    name: 'WeChatCircleOfFriendsColours',
    Component: WeChatCircleOfFriendsColours,
  },
  { name: 'WeChatColours', Component: WeChatColours },
  { name: 'WeChatPayColours', Component: WeChatPayColours },
  { name: 'WeiboColours', Component: WeiboColours },
  { name: 'WordColours', Component: WordColours },
  { name: 'YuanCircleColours', Component: YuanCircleColours },
]

const Colours: React.FC = () => {
  return <Code icons={icons} currentColor={false} />
}

export default Colours
