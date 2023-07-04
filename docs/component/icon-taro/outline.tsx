import React from 'react'

import {
  ArrowDownOutline,
  ArrowLeftOutline,
  ArrowRightOutline,
  ArrowUpOutline,
  BoardOutline,
  CertificateOutline,
  ChainOutline,
  CopyOutline,
  CorrectOutline,
  CrossOutline,
  DeleatOutline,
  ExitOutline,
  Home2Outline,
  HomeOutline,
  MansionOutline,
  MenuOutline,
  PlateOutline,
  RefreshOutline,
  SearchOutline,
  SettingOutline,
  ShopOutline,
  SwapOutline,
  TelOutline,
} from '@fruits-chain/icons-taro'

import Code from '../icon/code'

const icons: { name: string; Component: any }[] = [
  { name: 'ArrowDownOutline', Component: ArrowDownOutline },
  { name: 'ArrowLeftOutline', Component: ArrowLeftOutline },
  { name: 'ArrowRightOutline', Component: ArrowRightOutline },
  { name: 'ArrowUpOutline', Component: ArrowUpOutline },
  { name: 'BoardOutline', Component: BoardOutline },
  { name: 'CertificateOutline', Component: CertificateOutline },
  { name: 'ChainOutline', Component: ChainOutline },
  { name: 'CopyOutline', Component: CopyOutline },
  { name: 'CorrectOutline', Component: CorrectOutline },
  { name: 'CrossOutline', Component: CrossOutline },
  { name: 'DeleatOutline', Component: DeleatOutline },
  { name: 'ExitOutline', Component: ExitOutline },
  { name: 'Home2Outline', Component: Home2Outline },
  { name: 'HomeOutline', Component: HomeOutline },
  { name: 'MansionOutline', Component: MansionOutline },
  { name: 'MenuOutline', Component: MenuOutline },
  { name: 'PlateOutline', Component: PlateOutline },
  { name: 'RefreshOutline', Component: RefreshOutline },
  { name: 'SearchOutline', Component: SearchOutline },
  { name: 'SettingOutline', Component: SettingOutline },
  { name: 'ShopOutline', Component: ShopOutline },
  { name: 'SwapOutline', Component: SwapOutline },
  { name: 'TelOutline', Component: TelOutline },
]

const Outline: React.FC = () => {
  return <Code icons={icons} currentColor={false} />
}

export default Outline
