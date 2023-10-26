import React from 'react';
import logo from 'common/img/logo.png'
import {history,Link} from '@umijs/max'
import IconMap from '../IconMap';

function SideBar({Sider,Menu,collapse}) {
  const routeList = sessionStorage.getItem('routeList') ? JSON.parse(sessionStorage.getItem('routeList')) : []
  const pathname = history.location.pathname

  return (
    <Sider theme="light" className="side-bar" collapsed={collapse}>
      <div className="brand">
        <div className="logo">
          <img src={logo} alt="" />
          {collapse ? <></> : <h1>渡一教育</h1>}
        </div>
      </div>
      <div className="menu-container">
        <Menu mode="inline" selectedKeys={[pathname]}>
          {routeList?.map((item) => {
            return (
              <Menu.Item key={item.route}>
                <Link to={item.route}>
                  {IconMap[item.icon]}
                  <span>{item.zhName}</span>
                </Link>
              </Menu.Item>
            )
          })}
        </Menu>
      </div>
    </Sider>
  );
}

export default SideBar;