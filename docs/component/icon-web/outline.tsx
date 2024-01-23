import React from 'react'

import {
  AnalysisOutline,
  Apartment2Outline,
  ApartmentOutline,
  ArcRectSettingOutline,
  ArrowDownRectDextroversionOutline,
  ArrowDownRectSettingOutline,
  ArrowUpRectSettingOutline,
  BoardIndexOutline,
  BoardLineOutline,
  BoardPieOutline,
  BoardYuanOutline,
  BoatAnchorRectSettingOutline,
  BookOutline,
  BookmarkRectSettingOutline,
  BookmarkRectSwapOutline,
  BrokenRectSettingOutline,
  BucketOutline,
  CheckRecordsOutline,
  CheckSheetYuanOutline,
  ComputerAiOutline,
  ComputerDataOutline,
  ComputerIndexOutline,
  ComputerOutline,
  ComputerTemperatureOutline,
  ContainerExportOutline,
  ContainerImportOutline,
  ContainerOutline,
  ContainerSettingOutline,
  ContentIndicatorsOutline,
  CrossOutline,
  DashboardOutline,
  DataReportOutline,
  DisplayOutline,
  DoubleArrowRectSettingOutline,
  DoubleUpRectDextroversionOutline,
  DoubleUpRectSettingOutline,
  DraftsOutline,
  DrawerFoldOutline,
  DrawerUnfoldOutline,
  FileAgencySaleOutline,
  FileCarOutline,
  FileChartOutline,
  FileCheckListOutline,
  FileJiuOutline,
  FileRecordOutline,
  FileScreenOutline,
  FileSealOutline,
  FileSearchOutline,
  FileSettingOutline,
  FileTextOutline,
  FileTransportOutline,
  FileUserOutline,
  FileYuanOutline,
  FrameOutline,
  FruitStorageOutline,
  GoldBrickSettingOutline,
  HandArrowUpOutline,
  HandCoinInversionOutline,
  HandCoinOutline,
  HandDoubleDownOutline,
  HomeOutline,
  HomeSettingOutline,
  HomeSwapOutline,
  ImageOpenOutline,
  ImageStowOutline,
  InventoryRecordsOutline,
  MobilePhoneOutline,
  MoreCircleOutline,
  MultilayerCylinderSettingOutline,
  OperatorOutline,
  PageRecordOutline,
  PaletteYuanOutline,
  PauseRectSettingOutline,
  PlusCircleOutline,
  ReceiptOutline,
  RecordSettingOutline,
  ScreeningOutline,
  SealRectSettingOutline,
  SearchOutline,
  ShopOutline,
  ShoppingBagOutline,
  SpeedOutline,
  SuccessOutline,
  SwapRectSettingOutline,
  TagsOutline,
  TargetOutline,
  TaskPanelOutline,
  TeamOutline,
  ThirdpartnarOutline,
  TrucksOutline,
  UserRectSettingOutline,
  UserSettingOutline,
  YuanCircleOutline,
  YuanCircleSettingOutline,
  YuanImportOutline,
  YuanWadOutline,
} from '@fruits-chain/icons-react'

import Code from '../icon/code'

const icons: { name: string; Component: any }[] = [
  { name: 'AnalysisOutline', Component: AnalysisOutline },
  { name: 'Apartment2Outline', Component: Apartment2Outline },
  { name: 'ApartmentOutline', Component: ApartmentOutline },
  { name: 'ArcRectSettingOutline', Component: ArcRectSettingOutline },
  {
    name: 'ArrowDownRectDextroversionOutline',
    Component: ArrowDownRectDextroversionOutline,
  },
  {
    name: 'ArrowDownRectSettingOutline',
    Component: ArrowDownRectSettingOutline,
  },
  { name: 'ArrowUpRectSettingOutline', Component: ArrowUpRectSettingOutline },
  { name: 'BoardIndexOutline', Component: BoardIndexOutline },
  { name: 'BoardLineOutline', Component: BoardLineOutline },
  { name: 'BoardPieOutline', Component: BoardPieOutline },
  { name: 'BoardYuanOutline', Component: BoardYuanOutline },
  {
    name: 'BoatAnchorRectSettingOutline',
    Component: BoatAnchorRectSettingOutline,
  },
  { name: 'BookOutline', Component: BookOutline },
  { name: 'BookmarkRectSettingOutline', Component: BookmarkRectSettingOutline },
  { name: 'BookmarkRectSwapOutline', Component: BookmarkRectSwapOutline },
  { name: 'BrokenRectSettingOutline', Component: BrokenRectSettingOutline },
  { name: 'BucketOutline', Component: BucketOutline },
  { name: 'CheckRecordsOutline', Component: CheckRecordsOutline },
  { name: 'CheckSheetYuanOutline', Component: CheckSheetYuanOutline },
  { name: 'ComputerAiOutline', Component: ComputerAiOutline },
  { name: 'ComputerDataOutline', Component: ComputerDataOutline },
  { name: 'ComputerIndexOutline', Component: ComputerIndexOutline },
  { name: 'ComputerOutline', Component: ComputerOutline },
  { name: 'ComputerTemperatureOutline', Component: ComputerTemperatureOutline },
  { name: 'ContainerExportOutline', Component: ContainerExportOutline },
  { name: 'ContainerImportOutline', Component: ContainerImportOutline },
  { name: 'ContainerOutline', Component: ContainerOutline },
  { name: 'ContainerSettingOutline', Component: ContainerSettingOutline },
  { name: 'ContentIndicatorsOutline', Component: ContentIndicatorsOutline },
  { name: 'CrossOutline', Component: CrossOutline },
  { name: 'DashboardOutline', Component: DashboardOutline },
  { name: 'DataReportOutline', Component: DataReportOutline },
  { name: 'DisplayOutline', Component: DisplayOutline },
  {
    name: 'DoubleArrowRectSettingOutline',
    Component: DoubleArrowRectSettingOutline,
  },
  {
    name: 'DoubleUpRectDextroversionOutline',
    Component: DoubleUpRectDextroversionOutline,
  },
  { name: 'DoubleUpRectSettingOutline', Component: DoubleUpRectSettingOutline },
  { name: 'DraftsOutline', Component: DraftsOutline },
  { name: 'DrawerFoldOutline', Component: DrawerFoldOutline },
  { name: 'DrawerUnfoldOutline', Component: DrawerUnfoldOutline },
  { name: 'FileAgencySaleOutline', Component: FileAgencySaleOutline },
  { name: 'FileCarOutline', Component: FileCarOutline },
  { name: 'FileChartOutline', Component: FileChartOutline },
  { name: 'FileCheckListOutline', Component: FileCheckListOutline },
  { name: 'FileJiuOutline', Component: FileJiuOutline },
  { name: 'FileRecordOutline', Component: FileRecordOutline },
  { name: 'FileScreenOutline', Component: FileScreenOutline },
  { name: 'FileSealOutline', Component: FileSealOutline },
  { name: 'FileSearchOutline', Component: FileSearchOutline },
  { name: 'FileSettingOutline', Component: FileSettingOutline },
  { name: 'FileTextOutline', Component: FileTextOutline },
  { name: 'FileTransportOutline', Component: FileTransportOutline },
  { name: 'FileUserOutline', Component: FileUserOutline },
  { name: 'FileYuanOutline', Component: FileYuanOutline },
  { name: 'FrameOutline', Component: FrameOutline },
  { name: 'FruitStorageOutline', Component: FruitStorageOutline },
  { name: 'GoldBrickSettingOutline', Component: GoldBrickSettingOutline },
  { name: 'HandArrowUpOutline', Component: HandArrowUpOutline },
  { name: 'HandCoinInversionOutline', Component: HandCoinInversionOutline },
  { name: 'HandCoinOutline', Component: HandCoinOutline },
  { name: 'HandDoubleDownOutline', Component: HandDoubleDownOutline },
  { name: 'HomeOutline', Component: HomeOutline },
  { name: 'HomeSettingOutline', Component: HomeSettingOutline },
  { name: 'HomeSwapOutline', Component: HomeSwapOutline },
  { name: 'ImageOpenOutline', Component: ImageOpenOutline },
  { name: 'ImageStowOutline', Component: ImageStowOutline },
  { name: 'InventoryRecordsOutline', Component: InventoryRecordsOutline },
  { name: 'MobilePhoneOutline', Component: MobilePhoneOutline },
  { name: 'MoreCircleOutline', Component: MoreCircleOutline },
  {
    name: 'MultilayerCylinderSettingOutline',
    Component: MultilayerCylinderSettingOutline,
  },
  { name: 'OperatorOutline', Component: OperatorOutline },
  { name: 'PageRecordOutline', Component: PageRecordOutline },
  { name: 'PaletteYuanOutline', Component: PaletteYuanOutline },
  { name: 'PauseRectSettingOutline', Component: PauseRectSettingOutline },
  { name: 'PlusCircleOutline', Component: PlusCircleOutline },
  { name: 'ReceiptOutline', Component: ReceiptOutline },
  { name: 'RecordSettingOutline', Component: RecordSettingOutline },
  { name: 'ScreeningOutline', Component: ScreeningOutline },
  { name: 'SealRectSettingOutline', Component: SealRectSettingOutline },
  { name: 'SearchOutline', Component: SearchOutline },
  { name: 'ShopOutline', Component: ShopOutline },
  { name: 'ShoppingBagOutline', Component: ShoppingBagOutline },
  { name: 'SpeedOutline', Component: SpeedOutline },
  { name: 'SuccessOutline', Component: SuccessOutline },
  { name: 'SwapRectSettingOutline', Component: SwapRectSettingOutline },
  { name: 'TagsOutline', Component: TagsOutline },
  { name: 'TargetOutline', Component: TargetOutline },
  { name: 'TaskPanelOutline', Component: TaskPanelOutline },
  { name: 'TeamOutline', Component: TeamOutline },
  { name: 'ThirdpartnarOutline', Component: ThirdpartnarOutline },
  { name: 'TrucksOutline', Component: TrucksOutline },
  { name: 'UserRectSettingOutline', Component: UserRectSettingOutline },
  { name: 'UserSettingOutline', Component: UserSettingOutline },
  { name: 'YuanCircleOutline', Component: YuanCircleOutline },
  { name: 'YuanCircleSettingOutline', Component: YuanCircleSettingOutline },
  { name: 'YuanImportOutline', Component: YuanImportOutline },
  { name: 'YuanWadOutline', Component: YuanWadOutline },
]

const Outline: React.FC = () => {
  return <Code icons={icons} currentColor={true} />
}

export default Outline
