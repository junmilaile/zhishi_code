import React from 'react';
import { Outlet,useLocation,useSelector} from '@umijs/max'
import {selectLayout} from 'utils/selectLayout'
import BaseLayout from './BaseLayout'
import LoginLayout from './LoginLayout'
// 创建loding组件,引入组件
import LoadingAdd from '@/components/Loading/index'

function index(props) {

  const location = useLocation()
  const LayoutMap = {BaseLayout, LoginLayout}

  const Container = LayoutMap[selectLayout(location.pathname)]

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const loading = useSelector((state: { loading: any; }) => state.loading)
  
  return (
    <>
   
        <LoadingAdd  isShow={loading.effects['users/login']}/>
        <Container>
          <Outlet/>
        </Container>

    </>
  );
}

export default index;