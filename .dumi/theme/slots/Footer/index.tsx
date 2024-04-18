import React, { type FC } from 'react'
import './index.less'

const data: {
  title: React.ReactNode
  links: { title: React.ReactNode; link: string }[]
}[] = [
  {
    title: '相关资源',
    links: [
      {
        title: '24jieqi',
        link: 'https://github.com/24jieqi',
      },
      {
        title: '维护团队',
        link: 'https://24jieqi.github.io',
      },
    ],
  },
  {
    title: '社区',
    links: [],
  },
  {
    title: '帮助',
    links: [
      {
        title: 'GitHub',
        link: 'https://github.com/24jieqi/icon',
      },
      {
        title: '报告 Bug',
        link: 'https://github.com/24jieqi/icon/issues/new',
      },
    ],
  },
  {
    title: '更多产品',
    links: [
      {
        title: '小暑',
        link: 'https://24jieqi.github.io/react-native-xiaoshu/',
      },
      {
        title: '白露',
        link: 'https://hjfruit.github.io/bailu-doc/',
      },
      {
        title: '寒露',
        link: 'https://hjfruit.github.io/hanlu-doc/',
      },
      {
        title: '秋分',
        link: 'https://24jieqi.github.io/qiufen/',
      },
      {
        title: '工具集',
        link: 'https://24jieqi.github.io/utils/',
      },
    ],
  },
]

const Footer: FC = () => {
  return (
    <div className="dumi-custom-footer">
      <div className="dumi-custom-footer-inner">
        {data.map(item => {
          return (
            <dl key={`${item.title}`}>
              <dt>{item.title}</dt>

              {item.links.map(subitem => {
                return (
                  <dd key={`${subitem.title}`}>
                    <a target="_blank" href={subitem.link}>
                      {subitem.title}
                    </a>
                  </dd>
                )
              })}
            </dl>
          )
        })}
      </div>
    </div>
  )
}

export default Footer
