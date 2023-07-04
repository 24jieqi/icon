import React from 'react'

import {} from '@fruits-chain/icons-taro'

import Code from '../icon/code'

const icons: { name: string; Component: any }[] = []

const Colours: React.FC = () => {
  return <Code icons={icons} currentColor={false} />
}

export default Colours
