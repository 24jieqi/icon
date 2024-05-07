import React from 'react'

import {
  ArrowDownOutline,
  ArrowLeftOutline,
  ArrowRightOutline,
  ArrowUpOutline,
  BoardOutline,
  CertificateOutline,
  ChainOutline,
  CheckOutline,
  CircleOutline,
  CommentOutline,
  CopyOutline,
  CorrectOutline,
  CrossOutline,
  DeleteOutline,
  DraftsOutline,
  EditCoga05jlOutline,
  EditOutline,
  ExitOutline,
  ExportOutline,
  GrassOutline,
  HexagonBarOutline,
  Home2Outline,
  HomeOutline,
  LikeOutline,
  LocationOutline,
  ManOutline,
  MansionOutline,
  MenuCogah2p3Outline,
  MenuOutline,
  MoreRectangleOutline,
  PlateOutline,
  PlusOutline,
  RefreshOutline,
  SearchOutline,
  SettingOutline,
  ShopOutline,
  StarOutline,
  SwapOutline,
  TelOutline,
  UserOutline,
  VerticalAlignTopOutline,
  WarningCircleOutline,
  WomanOutline,
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
  { name: 'CheckOutline', Component: CheckOutline },
  { name: 'CircleOutline', Component: CircleOutline },
  { name: 'CommentOutline', Component: CommentOutline },
  { name: 'CopyOutline', Component: CopyOutline },
  { name: 'CorrectOutline', Component: CorrectOutline },
  { name: 'CrossOutline', Component: CrossOutline },
  { name: 'DeleteOutline', Component: DeleteOutline },
  { name: 'DraftsOutline', Component: DraftsOutline },
  { name: 'EditCoga05jlOutline', Component: EditCoga05jlOutline },
  { name: 'EditOutline', Component: EditOutline },
  { name: 'ExitOutline', Component: ExitOutline },
  { name: 'ExportOutline', Component: ExportOutline },
  { name: 'GrassOutline', Component: GrassOutline },
  { name: 'HexagonBarOutline', Component: HexagonBarOutline },
  { name: 'Home2Outline', Component: Home2Outline },
  { name: 'HomeOutline', Component: HomeOutline },
  { name: 'LikeOutline', Component: LikeOutline },
  { name: 'LocationOutline', Component: LocationOutline },
  { name: 'ManOutline', Component: ManOutline },
  { name: 'MansionOutline', Component: MansionOutline },
  { name: 'MenuCogah2p3Outline', Component: MenuCogah2p3Outline },
  { name: 'MenuOutline', Component: MenuOutline },
  { name: 'MoreRectangleOutline', Component: MoreRectangleOutline },
  { name: 'PlateOutline', Component: PlateOutline },
  { name: 'PlusOutline', Component: PlusOutline },
  { name: 'RefreshOutline', Component: RefreshOutline },
  { name: 'SearchOutline', Component: SearchOutline },
  { name: 'SettingOutline', Component: SettingOutline },
  { name: 'ShopOutline', Component: ShopOutline },
  { name: 'StarOutline', Component: StarOutline },
  { name: 'SwapOutline', Component: SwapOutline },
  { name: 'TelOutline', Component: TelOutline },
  { name: 'UserOutline', Component: UserOutline },
  { name: 'VerticalAlignTopOutline', Component: VerticalAlignTopOutline },
  { name: 'WarningCircleOutline', Component: WarningCircleOutline },
  { name: 'WomanOutline', Component: WomanOutline },
]

const Outline: React.FC = () => {
  return <Code icons={icons} currentColor={false} />
}

export default Outline
