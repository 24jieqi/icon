import React from 'react'
import { ConfigProvider } from 'antd'

const Root = ({ children }) => {
  return <ConfigProvider>{children}</ConfigProvider>
}

export function rootContainer(container: React.ReactNode) {
  return React.createElement(Root, null, container)
}
