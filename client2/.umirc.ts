import { defineConfig } from '@umijs/max';
const {resolve}  = require('path')



export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
    locale: { enabled: false },
  },   // 默认开启，如无需菜单国际化可关闭
  dva: {},
  alias: {
    api: resolve(__dirname, './src/services/'), 
    components: resolve(__dirname, './src/components'),
    common: resolve(__dirname, './src/common'),
    // config: resolve(__dirname, './src/utils/config'),
    // themes: resolve(__dirname, './src/themes'),
    utils: resolve(__dirname, './src/utils'),
  },
  routes: [
    {
      path: '/', 
      component: '@/layouts/index',
      // 不展示顶栏
      headerRender: false,
      // 不展示页脚
      footerRender: false,
      // 不展示菜单
      menuRender: false,
    },
    {
      path: '/users/login',
      component: './users/login',
        // 不展示顶栏
      headerRender: false,
      // 不展示页脚
      footerRender: false,
      // 不展示菜单
      menuRender: false,
    },
    {
      path: '/users/forgetpassword',
      component: './users/ForgetPassword',
        // 不展示顶栏
      headerRender: false,
      // 不展示页脚
      footerRender: false,
      // 不展示菜单
      menuRender: false,
    },
    {
      name:'情况分析页面',
      path:'/dashboard',
      component: './dashboard/index.tsx',
      // 不展示顶栏
      headerRender: false,
      // 不展示页脚
      footerRender: false,
      // 不展示菜单
      menuRender: false,
    },
    {
      name:'出勤统计界面',
      path:'/attendance',
      component: './attendance/index.tsx',
      // 不展示顶栏
      headerRender: false,
      // 不展示页脚
      footerRender: false,
      // 不展示菜单
      menuRender: false,
    },
    {
      name:'员工管理界面',
      path:'/staff',
      component: './staff/index.tsx',
      // 不展示顶栏
      headerRender: false,
      // 不展示页脚
      footerRender: false,
      // 不展示菜单
      menuRender: false,
    }
  ],
  npmClient: 'pnpm',
  // 在这里配置代理服务器
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001',
      changeOrigin: true
    }
  }
});

