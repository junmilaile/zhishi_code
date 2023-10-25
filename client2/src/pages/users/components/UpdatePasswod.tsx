import React from 'react';
import IconMap from '@/components/IconMap';
import { loginRule } from '@/utils/rules';

function UpdatePasswod({FormItem,Input,form}) {
  return (
    <div>
        <FormItem name="password"  hasFeedback  rules={loginRule.passwordRule} >
          <Input
          placeholder="新的登录密码" 
          prefix={IconMap.userIcon}
          type="password"
          />
          </FormItem> 
          <FormItem name="newPassword"  hasFeedback rules={loginRule.confirmPasswordRule(form)}>
          <Input placeholder="确认新的登录密码"  prefix={IconMap.passwodIcon} type="password"/>
      </FormItem> 
    </div>
  );
}

export default UpdatePasswod;