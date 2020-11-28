module.exports = {
    themeConfig: {
        logo: '/assets/img/logo.jpg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'foo', link: '/foo/' },
            { text: 'External', link: 'https://google.com' },
            {
                text: '工具箱',
                items: [
           {
                        text: '在线编辑',
            items: [
             {text: '图片压缩', link: 'https://tinypng.com/'}
            ]
                    },
           {
                        text: '在线服务',
            items: [
             {text: '阿里云', link: 'https://www.aliyun.com/'},
             {text: '腾讯云', link: 'https://cloud.tencent.com/'}
            ]
                    },
           {
                        text: '博客指南',
            items: [
             {text: '掘金', link: 'https://juejin.im/'},
             {text: 'CSDN', link: 'https://blog.csdn.net/'}
            ]
                    }
                ]
            }
          ],

          sidebar:{
            '/foo/':["","one","two"]   //   / 结尾的路径将会被视为 */README.md
            },
         
      },
      

    title: '这里是导航栏',
    description: 'Just playing around',
    sidebar: 'auto'
  }