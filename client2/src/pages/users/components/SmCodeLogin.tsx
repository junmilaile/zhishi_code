import React,{useState} from 'react';
import IconMap from '@/components/IconMap';
import {Button, message} from 'antd'
import {loginRule} from '@/utils/rules'
import $http from 'api'


function SmCodeLogin({Input,FormItem,form}) {
  // 控制按钮的禁用和启用
  const [disabled,setDisabled] = useState(true)
  // 验证码的倒计时
  let [currentTime, setCurrentTime] = useState(60)
  // 当前是否是发送验证的状态
  const [currentStatus, setCurrentStatus] = useState(true)
  // 检查手机号码输入是否成功
  const checkedMobile = async (val) => {
    // 获取手机的验证结果
   try {
     const status = await form.validateFields(['mobile'])
     setDisabled(false)
   } catch(error) {
    setDisabled(true)
   }
  }

  // 发送验证码
  const sendSmCode = async () => {
    setCurrentStatus(false)
    // 获取当前用户输入的手机号码
    const mobile = form.getFieldValue('mobile')
    const res = await $http.getSmCode({mobile})
    console.log(res,'res');
    message.success(res.msg)
    setDisabled(true)
    runTime()
  }

  // 倒计时函数
  const runTime = () => {
    const time = setInterval(() => {
      if(currentTime === 0) {
        clearInterval(time)
        setCurrentTime(60)
        setCurrentStatus(true)
        setDisabled(false)
        return
      }
      setCurrentTime( currentTime -= 1)
    },1000)
    
  }

  return (
    <>
     <FormItem name="mobile"  rules={loginRule.mobileRule} hasFeedback>
      <Input placeholder="请输入手机号码" prefix={IconMap.mobileIcon} onChange={checkedMobile}/>
      </FormItem> 
      <FormItem name="code" rules={loginRule.codeRule} hasFeedback>
      <Input 
      placeholder="请输入验证码"  
      prefix={IconMap.smCodeIcon} 
      addonAfter={<Button 
      disabled={disabled}
      onClick={sendSmCode}
      >{currentStatus ? '发送验证码': `${currentTime}秒后重新发送`}</Button>}
      />
      </FormItem> 
    </>
  );
}

export default SmCodeLogin;