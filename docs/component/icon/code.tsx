import { Row, Col, Empty, message } from 'antd'
import copy from 'copy-to-clipboard'
import React, { memo } from 'react'

import STYLES from './style.less'

interface Icon {
  name: string
  Component: React.FC
}

interface CodeProps {
  icons: Icon[]
}

const Code: React.FC<CodeProps> = ({ icons }) => {
  const genOnClick = (c: string) => () => {
    const code = `<${c} />`

    copy(code)

    message.success(
      <>
        <code className={STYLES.code}>{code}</code> copied 🎉
      </>,
    )
  }

  if (icons.length === 0) {
    return <Empty />
  }

  return (
    <Row>
      {icons.map(icon => {
        return (
          <Col
            key={icon.name}
            span={4}
            className={STYLES.item}
            onClick={genOnClick(icon.name)}>
            <span className={STYLES.icon}>
              <icon.Component />
            </span>
            <p>{icon.name}</p>
          </Col>
        )
      })}
    </Row>
  )
}

export default memo(Code)
