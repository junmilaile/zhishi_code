import {useState} from 'react';
// 使用antd的组件
import { Button, Form, Input, Row, message } from 'antd';
import IconMap from 'components/IconMap';
import LogoImg from 'common/img/logo.svg';
import './css/login.less'
import {useSelector,history} from '@umijs/max'
import $http from 'api'
import SmCodeLogin from './components/SmCodeLogin';
import UpdatePasswod from './components/UpdatePasswod';

function forgetpassword(props) {
  
  const [form] = Form.useForm();
  // 创建表单项
  const FormItem = Form.Item;
  // 当前展示哪个组件
  const [currentStep, setCurrentStep] = useState(1);
  const loading = useSelector(state => state.loading) 

  // 当前用户点击提交按钮处理
  const submitSelect = async (data) => {
    currentStep === 1 ? _checkCode(data.code) : _updatePassword(data.newPassword)
  }
  //检查用户验证码操作
  const _checkCode = async (smCode) => {
    const {data,msg} = await $http.checkCode({smCode})
    if(data) {
      setCurrentStep(2)
      message.success(msg)
    }else {
      message.error(msg)
    } 
  }
  // 用户修改密码
  const _updatePassword = async (newPassword) => {
    const {data,msg} = await $http.resetPassword({newPassword})
    if(data) {
      message.success(msg)
      history.replace('/users/login')
    }else {
      message.error(msg)
    }
    
  }

  // 组件选择的函数
  const ComponentSelector = (props:any) => {
    return currentStep === 1 ? <SmCodeLogin {...props} /> : <UpdatePasswod {...props} />
  }

  return (
    <div className="form forget-password">
      <div className="forget-password-title">
        {currentStep === 1 ? '忘记密码' : '重置密码'}
      </div>
      <Form form={form} onFinish={submitSelect}>
        {/* 选择当前展示的组件：用户名 手机号*/}
        {ComponentSelector({form,FormItem, Input})}
        <Row>
          <Button 
          type="primary" block htmlType="submit">
            {currentStep === 1 ? '下一步' : '重置'}
          </Button>
        </Row>
      </Form>
    </div>
  );
}

export default forgetpassword;