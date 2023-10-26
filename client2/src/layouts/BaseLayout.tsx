import React,{useState} from 'react';
import { Outlet } from '@umijs/max';
import {Layout,Menu} from 'antd'
import './css/BaseLayout.less'
import SideBar from '@/components/SideBar';
import CommonHeader from '@/components/CommonHeader/index'

const {Header,Content,Sider} = Layout

function BaseLayout(props) {
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
          <Outlet />
        </Content>
      </Layout>
    </Layout>
   </>
  );
}

export default BaseLayout;