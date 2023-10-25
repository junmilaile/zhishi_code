import React from 'react';
import { Outlet,useLocation,useSelector} from '@umijs/max'
import {selectLayout} from 'utils/selectLayout'
import BaseLayout from './BaseLayout'
import LoginLayout from './LoginLayout'
// 创建loding组件,引入组件
import LoadingAdd from '@/components/Loading/index'

function index(props) {
  // console.log(props)
  // console.log(selectLayout)
  const location = useLocation()
  const LayoutMap = {BaseLayout, LoginLayout}
  // console.log(location)
  const Container = LayoutMap[selectLayout(location.pathname)]
  // console.log()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const loading = useSelector((state: { loading: any; }) => state.loading)
  console.log(loading,'loading');
  
  
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