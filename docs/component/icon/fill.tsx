import React from 'react'

import {
  CrossFill,
  DeleteFill,
  PlayCircleFill,
  SuccessFill,
} from '@fruits-chain/icons-react'

import Code from './code'

const icons = [
  { name: 'CrossFill', Component: CrossFill },
  { name: 'DeleteFill', Component: DeleteFill },
  { name: 'PlayCircleFill', Component: PlayCircleFill },
  { name: 'SuccessFill', Component: SuccessFill },
]

const Fill: React.FC = () => {
  return <Code icons={icons} />
}

export default Fill
