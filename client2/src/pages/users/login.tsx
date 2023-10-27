import {useState} from 'react';
// 使用antd的组件
import { Button, Form, Input, Row, Col } from 'antd';
import AccountLogin from './components/AccountLogin';
import SmCodeLogin from './components/SmCodeLogin';
import {  } from 'antd/es/form/Form';
import IconMap from 'components/IconMap';
import LogoImg from 'common/img/logo.svg';
import './css/login.less'
import {useDispatch,useSelector,history} from '@umijs/max'

function login(props) {
  
  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const FormItem = Form.Item;
  const [type, setType] = useState(0);
  const loading = useSelector(state => state.loading) 

  // 当表单输入完成的提交事件
  const submitUserInfo = (data: any) => {
    // 登录请求的参数处理，type 为必选项
    dispatch({type:'users/login',payload:{...data,type}},)

  }
  // 组件选择的函数
  const ComponentSelector = (props:any) => {
    return type ? <SmCodeLogin {...props} /> : <AccountLogin {...props} />
  }

  return (
    <div className="form">
      <div className="logo">
        <img src={LogoImg} alt="" />
        <span>织信人事管理系统</span>
      </div>
      <Form form={form} onFinish={submitUserInfo}>
        {/* 选择当前展示的组件：用户名 手机号*/}
        {ComponentSelector({form,FormItem, Input})}
        <Row>
          <Button type="primary" block htmlType="submit">登录</Button>
        </Row>
        <Row className="ft-12">
          <Col span={8}>
           <p onClick={() => history.push('/users/forgetpassword')}>
           忘记密码？
           </p>
          </Col>
          <Col span={16} className="align-right" onClick={() =>  setType(!type ? 1 : 0)}>
            {type ? '使用账号名密码登录' : '使用手机验证码登录'}
            {IconMap.arrowRight}
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default login;