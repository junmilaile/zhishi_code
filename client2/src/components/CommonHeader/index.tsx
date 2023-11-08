import React from 'react';
import IconMap from '../IconMap';
import {Avatar,Menu} from 'antd'
import defaultAvatarIcon from '../../common/img/default_avatar.png'
import {useSelector} from '@umijs/max'

// @common/img/default_avatar.png
const {SubMenu, Divider, Item} = Menu

function index({Header,collapse,changeCollapse}) {

  const {userInfo} = useSelector(state => state.users)
  
  const MenuTitle = (
    <>
      <span>{userInfo.userName}</span>
      <Avatar
      style={{marginLeft: '0'}}
      src={userInfo.avatar || defaultAvatarIcon}
      />
    </>
  )

  // 用户点击退出按钮
  const signOut = () => {
    sessionStorage.clear()
    window.location.href = '/users/login'
  }

  return (
    <Header className="header-wrapper">
      <div className="button" onClick={() => changeCollapse(!collapse)}>
        {collapse ? IconMap.rightArrow : IconMap.leftArrow}
      </div>
      <Menu mode="horizontal">
        <SubMenu key={'1'} title={MenuTitle}>
          <Divider/>
          <Item key="4" icon={IconMap.signOut} onClick={signOut}>
            <span>退出</span>
          </Item>
        </SubMenu>
      </Menu>
    </Header>
  );
}

export default index;