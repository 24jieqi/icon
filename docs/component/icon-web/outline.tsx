import React from 'react'

import {
  ApartmentOutline,
  CheckRecordsOutline,
  ComputerOutline,
  ContainerExportOutline,
  ContainerImportOutline,
  ContainerOutline,
  ContainerSettingOutline,
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
  FileTextOutline,
  FileTransportOutline,
  FileUserOutline,
  FileYuanOutline,
  FruitStorageOutline,
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
  ScreeningOutline,
  SpeedOutline,
  SuccessOutline,
  TargetOutline,
  TaskPanelOutline,
  TeamOutline,
  YuanCircleOutline,
  YuanImportOutline,
  YuanWadOutline,
} from '@fruits-chain/icons-react'

import Code from '../icon/code'

const icons: { name: string; Component: any }[] = [
  { name: 'ApartmentOutline', Component: ApartmentOutline },
  { name: 'CheckRecordsOutline', Component: CheckRecordsOutline },
  { name: 'ComputerOutline', Component: ComputerOutline },
  { name: 'ContainerExportOutline', Component: ContainerExportOutline },
  { name: 'ContainerImportOutline', Component: ContainerImportOutline },
  { name: 'ContainerOutline', Component: ContainerOutline },
  { name: 'ContainerSettingOutline', Component: ContainerSettingOutline },
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
  { name: 'FileTextOutline', Component: FileTextOutline },
  { name: 'FileTransportOutline', Component: FileTransportOutline },
  { name: 'FileUserOutline', Component: FileUserOutline },
  { name: 'FileYuanOutline', Component: FileYuanOutline },
  { name: 'FruitStorageOutline', Component: FruitStorageOutline },
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
  { name: 'ScreeningOutline', Component: ScreeningOutline },
  { name: 'SpeedOutline', Component: SpeedOutline },
  { name: 'SuccessOutline', Component: SuccessOutline },
  { name: 'TargetOutline', Component: TargetOutline },
  { name: 'TaskPanelOutline', Component: TaskPanelOutline },
  { name: 'TeamOutline', Component: TeamOutline },
  { name: 'YuanCircleOutline', Component: YuanCircleOutline },
  { name: 'YuanImportOutline', Component: YuanImportOutline },
  { name: 'YuanWadOutline', Component: YuanWadOutline },
]

const Outline: React.FC = () => {
  return <Code icons={icons} currentColor={true} />
}

export default Outline
