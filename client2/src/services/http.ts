
import qs from 'qs'
import {message} from 'antd'
import {history,request} from '@umijs/max'
const fetch = require('isomorphic-fetch');

// 创建响应状态码处理函数
const checkStatus = (response: { status: number; statusText: string | undefined; }) => {
  // 当请求不等于200时，进行异常处理
  if(response.status <= 200 && response.status < 300) {
    return response;
  }
  message.error(`网络请求错误${response.status}`)
  throw new Error(response.statusText);
}

// 判断本次请求的内容是否成功
const judgeOkStatus = async (res: { clone: () => { (): any; new(): any; json: { (): any; new(): any; }; }; }) => {
  const cloneRes = await res.clone().json();
  if(cloneRes.code !== 0) {
    message.error(`${cloneRes.msg}${cloneRes.code}`)
    // 跳转到登录页面
    history.replace('/users/login')
    // 清除token
    sessionStorage.clear()
  }
  return res;
}

// 错误处理函数
const handlerError = (error: any) => {
  if(error instanceof TypeError) {
    message.error(`网络请求失败${error}`)
  }
  return {
    code:400,
    data: false
  }
} 

class Http {
  static async staticFetch(url = '', options={}) {
    // 对url进行统一处理
    
    // eslint-disable-next-line no-param-reassign
    url = '/api' + url;
    const defaultOptions = {
      mode: 'cors', // 支持跨越处理，以cors的方式进行跨域
      headers: {
        Authorization: sessionStorage.getItem('token') || null
      }
    }

    // 判断请求的方式给请求头加上Content-Type
    if(options?.method === 'POST' || options?.method === 'PUT') {
      defaultOptions.headers['Content-Type'] = 'application/json; charset=utf-8';
    }

    // 合并options选项
    const newOptions = {...defaultOptions, ...options};

    return fetch(url, newOptions)
    .then(checkStatus)
    .then(judgeOkStatus)
    .then((res: { headers: { getItem: (arg0: string) => any; }; json: () => any; }) => {
      //获取响应头的token
      const token = res.headers?.get('Authorization');
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      token && sessionStorage.setItem('token', token);//获取token并进行存储
      return res.json();
    })
      .catch(handlerError)
  }

  // POST请求处理
  post(url: string | undefined,params={},option={} ){
    const options = Object.assign({method: 'POST'}, option);
    options.body = JSON.stringify(params);
    return Http.staticFetch(url,options)
  }

   // PUT请求处理
  put(url: string | undefined,params={},option={} ){
    const options = Object.assign({method: 'PUT'}, option);
    options.body = JSON.stringify(params);
    return Http.staticFetch(url,options)
  }

    // GET请求处理
    get(url: string | undefined,option={} ){
      const options = Object.assign({method: 'GET'}, option) 
      // eslint-disable-next-line no-param-reassign
      Object.keys(option) ?  Object.keys(option) : (url += '?' + qs.stringify(option))
      return Http.staticFetch(url,options)
    }

      // DELETE请求处理
  del(url: string | undefined,option={} ){
    const options = Object.assign({method: 'DELETE'}, option);
    Object.keys(option) ?  Object.keys(option) : (url += '?' + qs.stringify(option))
    return Http.staticFetch(url,options)
  }
}

const resFun = new Http();

export default resFun;