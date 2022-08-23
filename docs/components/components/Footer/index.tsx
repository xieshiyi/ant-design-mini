import React from 'react';
import {
  AntDesignOutlined,
  MediumOutlined,
  TwitterOutlined,
  ZhihuOutlined,
  GithubOutlined,
  BugOutlined,
  IssuesCloseOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import styles from './index.local.less';

const footerData = [
  {
    title: '相关资源',
    items: [
      {
        title: 'Ant Design Charts',
        url: 'https://charts.ant.design',
      },
      {
        title: 'Ant Design Pro',
        url: 'https://pro.ant.design',
      },
      {
        title: 'Ant Design Pro Components',
        url: 'https://procomponents.ant.design',
      },
      {
        title: 'Ant Design Mobile',
        url: 'https://mobile.ant.design',
      },
      {
        title: 'Ant Design Landing',
        description: '首页模板集',
        url: 'https://landing.ant.design',
      },
      {
        title: 'Scaffolds',
        description: '脚手架市场',
        url: 'https://scaffold.ant.design',
      },
      {
        title: 'Umi',
        description: 'react 应用开发框架',
        url: 'https://umijs.org',
      },
      {
        title: 'Dumi',
        description: '组件/文档研发工具',
        url: 'https://d.umijs.org',
      },
      {
        title: 'qiankun',
        description: '微前端框架',
        url: 'https://qiankun.umijs.org',
      },
      {
        title: 'ahooks',
        description: 'React Hooks 库',
        url: 'https://github.com/alibaba/hooks',
      },
      {
        title: 'Ant Motion',
        description: '设计动效',
        url: 'https://motion.ant.design',
      },
    ]
  },
  {
    title: '社区',
    items: [
      {
        icon: <AntDesignOutlined />,
        title: 'Awesome Ant Design',
        url: 'https://github.com/websemantics/awesome-ant-design',
      },
      {
        icon: <MediumOutlined />,
        title: 'Medium',
        url: 'http://medium.com/ant-design/',
      },
      {
        icon: <TwitterOutlined style={{ color: "#1DA1F2" }} />,
        title: 'Twitter',
        url: 'http://twitter.com/antdesignui',
      },
      {
        icon: <ZhihuOutlined style={{ color: "#0084ff" }} />,
        title: '体验科技专栏',
        url: 'http://zhuanlan.zhihu.com/xtech',
      },
    ],
  },
  {
    title: '帮助',
    items: [
      {
        icon: <GithubOutlined />,
        title: 'GitHub',
        url: 'https://github.com/ant-design/ant-design-mini',
      },
      {
        icon: <BugOutlined />,
        title: '报告 Bug',
        url: 'https://github.com/ant-design/ant-design-mini/issues',
      },
      {
        icon: <IssuesCloseOutlined />,
        title: '讨论列表',
        url: 'https://github.com/ant-design/ant-design-mini/issues',
      },
      {
        icon: <QuestionCircleOutlined />,
        title: '讨论',
        url: 'https://github.com/ant-design/ant-design-mini/discussions',
      },
    ],
  },
  {
    title: '更多产品',
    items: [
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
            alt="yuque"
            className={styles.columnItemCustomIcon}
          />
        ),
        title: '语雀',
        url: 'https://yuque.com',
        description: '专业的云端知识库',
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png"
            alt="AntV"
            className={styles.columnItemCustomIcon}
          />
        ),
        title: 'AntV',
        url: 'https://antv.vision',
        description: '数据可视化解决方案',
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/v2%24rh7lqpu/82f338dd-b0a6-41bc-9a86-58aaa9df217b.png"
            alt="Egg"
            className={styles.columnItemCustomIcon}
          />
        ),
        title: 'Egg',
        url: 'https://eggjs.org',
        description: '企业级 Node.js 框架',
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico"
            alt="kitchen"
            className={styles.columnItemCustomIcon}
          />
        ),
        title: 'Kitchen',
        description: 'Sketch 工具集',
        url: 'https://kitchen.alipay.com',
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
            alt="xtech"
            className={styles.columnItemCustomIcon}
          />
        ),
        title: '蚂蚁体验科技',
        url: 'https://xtech.antfin.com/',
      },
    ],
  }
]

export default () => {
  return (
    <div className={styles.footerContainer} >
      <div className={styles.footerBody}>
        {
          footerData.map(column => (
            <div className={styles.column}>
              <div className={styles.columnTile}>{column.title}</div>
              <div>
                {
                  column.items.map(columnItem => (
                    <div className={styles.columnItem}>
                      <a className={styles.columnItemUrl} href={columnItem.url} target="_blank" rel="noopener noreferrer">
                        <span className={styles.columnItemIcon}>{columnItem.icon}</span>
                        {columnItem.title}
                      </a>
                      <span className={styles.columnItemDescription}>
                        {
                          columnItem.description ? ' - ' + columnItem.description : ''
                        }
                      </span>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
      <div className={styles.copyright}>
        © 2022 Made with ❤ by
        <a className={styles.copyrightLink} href='https://xtech.antfin.com' target='_blank'>
          XTech
        </a>
      </div>
    </div >
  )
}

