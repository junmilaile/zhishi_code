// 引入封装好的fetch方法
import fetch from '../http';

// 用户登录接口api
export const userLogin = params => fetch.post('/login',params)

// 获取手机验证码
export const getSmCode = params => fetch.get('/getCode',params)

// 检查手机验证码是否输入正确-重置密码需要使用的接口
export const checkCode = params => fetch.get('/checkSmCode',params)

// 重置密码
export const resetPassword = params => fetch.post('/resetPassword',params)

// 检查用户是否登录
export const queryUserLogin = () => fetch.get('/queryLoginStatus')

// 获取路由表
export const getRoutesList = () => fetch.get('/getRouteList')