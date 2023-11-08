import React,{useState} from 'react';
import { Outlet,history } from '@umijs/max';
import {Layout,Menu} from 'antd'
import './css/BaseLayout.less'
import SideBar from '@/components/SideBar';
import CommonHeader from '@/components/CommonHeader/index'
import NotFoundPage from '../pages/404'

const {Header,Content,Sider} = Layout

function BaseLayout(props) {

  const {location} = history;
  const {pathname} = location;
  const roteList = JSON.parse(sessionStorage.getItem('routeList') || '[]')
  // 定义一个当前界面的判断函数，第一判断当前界面是不是根域名下，直接跳转到路由对象的首页面，如果当前访问的路径路由表没有直接跳转到404
  const isIncldesPage = () => {
    if(pathname === '/') {
      // 路由表根据权限返回，返回路由表的第一项
      history.replace(roteList[0].route)
      return false
    }
    return roteList.some(item => item.route === pathname)
  }

  // 不在users页面显示
  const [collapse,setCollapse] = useState(false)

  // 改变侧边栏的宽度展示
  const changeCollapse = status => {
    setCollapse(status)
  }

  return (
   <>
    <Layout className="container">
      <SideBar Sider={Sider} Menu={Menu} collapse={collapse}/>
      <Layout>
        <CommonHeader 
        Header={Header} 
        collapse={collapse}
        changeCollapse={changeCollapse}
        />
        <Content>
          {isIncldesPage() ? <Outlet /> : <NotFoundPage/>}
        </Content>
      </Layout>
    </Layout>
   </>
  );
}

export default BaseLayout;