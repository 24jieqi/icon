import React from 'react'

import { SuccessFill } from '@fruits-chain/icons-react'

import Code from '../icon/code'

const icons: { name: string; Component: any }[] = [
  { name: 'SuccessFill', Component: SuccessFill },
]

const Fill: React.FC = () => {
  return <Code icons={icons} currentColor={true} />
}

export default Fill
