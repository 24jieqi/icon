import React from 'react'

import {
  AnalysisOutline,
  Apartment2Outline,
  ApartmentOutline,
  ArrowDownRectSettingOutline,
  ArrowUpRectSettingOutline,
  BoardIndexOutline,
  BoardLineOutline,
  BoardPieOutline,
  BoardYuanOutline,
  BookOutline,
  BucketOutline,
  CheckRecordsOutline,
  CheckSheetYuanOutline,
  ComputerAiOutline,
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
  HandArrowUpOutline,
  HandCoinOutline,
  HandDoubleDownOutline,
  HomeOutline,
  HomeSettingOutline,
  ImageOpenOutline,
  ImageStowOutline,
  InventoryRecordsOutline,
  MobilePhoneOutline,
  MoreCircleOutline,
  OperatorOutline,
  PageRecordOutline,
  PaletteYuanOutline,
  PlusCircleOutline,
  ReceiptOutline,
  RecordSettingOutline,
  ScreeningOutline,
  ShopOutline,
  ShoppingBagOutline,
  SpeedOutline,
  SuccessOutline,
  TargetOutline,
  TaskPanelOutline,
  TeamOutline,
  ThirdpartnarOutline,
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
  {
    name: 'ArrowDownRectSettingOutline',
    Component: ArrowDownRectSettingOutline,
  },
  { name: 'ArrowUpRectSettingOutline', Component: ArrowUpRectSettingOutline },
  { name: 'BoardIndexOutline', Component: BoardIndexOutline },
  { name: 'BoardLineOutline', Component: BoardLineOutline },
  { name: 'BoardPieOutline', Component: BoardPieOutline },
  { name: 'BoardYuanOutline', Component: BoardYuanOutline },
  { name: 'BookOutline', Component: BookOutline },
  { name: 'BucketOutline', Component: BucketOutline },
  { name: 'CheckRecordsOutline', Component: CheckRecordsOutline },
  { name: 'CheckSheetYuanOutline', Component: CheckSheetYuanOutline },
  { name: 'ComputerAiOutline', Component: ComputerAiOutline },
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
  { name: 'HandArrowUpOutline', Component: HandArrowUpOutline },
  { name: 'HandCoinOutline', Component: HandCoinOutline },
  { name: 'HandDoubleDownOutline', Component: HandDoubleDownOutline },
  { name: 'HomeOutline', Component: HomeOutline },
  { name: 'HomeSettingOutline', Component: HomeSettingOutline },
  { name: 'ImageOpenOutline', Component: ImageOpenOutline },
  { name: 'ImageStowOutline', Component: ImageStowOutline },
  { name: 'InventoryRecordsOutline', Component: InventoryRecordsOutline },
  { name: 'MobilePhoneOutline', Component: MobilePhoneOutline },
  { name: 'MoreCircleOutline', Component: MoreCircleOutline },
  { name: 'OperatorOutline', Component: OperatorOutline },
  { name: 'PageRecordOutline', Component: PageRecordOutline },
  { name: 'PaletteYuanOutline', Component: PaletteYuanOutline },
  { name: 'PlusCircleOutline', Component: PlusCircleOutline },
  { name: 'ReceiptOutline', Component: ReceiptOutline },
  { name: 'RecordSettingOutline', Component: RecordSettingOutline },
  { name: 'ScreeningOutline', Component: ScreeningOutline },
  { name: 'ShopOutline', Component: ShopOutline },
  { name: 'ShoppingBagOutline', Component: ShoppingBagOutline },
  { name: 'SpeedOutline', Component: SpeedOutline },
  { name: 'SuccessOutline', Component: SuccessOutline },
  { name: 'TargetOutline', Component: TargetOutline },
  { name: 'TaskPanelOutline', Component: TaskPanelOutline },
  { name: 'TeamOutline', Component: TeamOutline },
  { name: 'ThirdpartnarOutline', Component: ThirdpartnarOutline },
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
