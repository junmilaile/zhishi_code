import React from 'react';
import { Outlet } from '@umijs/max';
import {Layout,Menu} from 'antd'
import './css/BaseLayout.less'
import SideBar from '@/components/SideBar';

const {Header,Content,Sider} = Layout

function BaseLayout(props) {
  // 不在users页面显示
  
  return (
   <>
    <Layout className="container">
      <SideBar Sider={Sider} Menu={Menu}/>
      <Layout>
        <Header>Header</Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
   </>
  );
}

export default BaseLayout;