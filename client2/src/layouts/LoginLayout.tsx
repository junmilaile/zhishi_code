import React from 'react';
import { Outlet } from '@umijs/max';

function LoginLayout(props) {
  // 在user页面显示的
  return (
    <>
      <Outlet />
    </>
  );
}

export default LoginLayout;