import React from 'react'

import {
  ApartmentOutline,
  ContainerExportOutline,
  ContainerImportOutline,
  ContainerOutline,
  ContainerSettingOutline,
  DashboardOutline,
  DataReportOutline,
  DisplayOutline,
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
  HomeSettingOutline,
  InventoryRecordsOutline,
  MobilePhoneOutline,
  OperatorOutline,
  PaletteYuanOutline,
  ReceiptOutline,
  SpeedOutline,
  TargetOutline,
  TaskPanelOutline,
  TeamOutline,
  YuanCircleOutline,
  YuanImportOutline,
} from '@fruits-chain/icons-react'

import Code from '../icon/code'

const icons: { name: string; Component: any }[] = [
  { name: 'ApartmentOutline', Component: ApartmentOutline },
  { name: 'ContainerExportOutline', Component: ContainerExportOutline },
  { name: 'ContainerImportOutline', Component: ContainerImportOutline },
  { name: 'ContainerOutline', Component: ContainerOutline },
  { name: 'ContainerSettingOutline', Component: ContainerSettingOutline },
  { name: 'DashboardOutline', Component: DashboardOutline },
  { name: 'DataReportOutline', Component: DataReportOutline },
  { name: 'DisplayOutline', Component: DisplayOutline },
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
  { name: 'HomeSettingOutline', Component: HomeSettingOutline },
  { name: 'InventoryRecordsOutline', Component: InventoryRecordsOutline },
  { name: 'MobilePhoneOutline', Component: MobilePhoneOutline },
  { name: 'OperatorOutline', Component: OperatorOutline },
  { name: 'PaletteYuanOutline', Component: PaletteYuanOutline },
  { name: 'ReceiptOutline', Component: ReceiptOutline },
  { name: 'SpeedOutline', Component: SpeedOutline },
  { name: 'TargetOutline', Component: TargetOutline },
  { name: 'TaskPanelOutline', Component: TaskPanelOutline },
  { name: 'TeamOutline', Component: TeamOutline },
  { name: 'YuanCircleOutline', Component: YuanCircleOutline },
  { name: 'YuanImportOutline', Component: YuanImportOutline },
]

const Outline: React.FC = () => {
  return <Code icons={icons} />
}

export default Outline
