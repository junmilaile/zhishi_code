import $http from 'api'
// 和路由前置守卫一样，这里也需要进行用户登录的检测，做了个路由拦截
export default {
  namespaced: 'common',
  state: {},
  subscriptions: {
    setup({dispatch, history}) {
      // 初始化查询用户是否登录，app.start()阶段进行执行
      dispatch({type: 'queryUserLogin',payload: {history}})
    }
  },
  effects: {
     *queryUserLogin({payload}, {call,put}) {
      const {history,history:{location: {pathname}}} = payload
      console.log(pathname,'pathname');
      // 判断用户当前访问路径
      if(pathname !== '/users/login' && pathname !== '/users/forgetpassword') {
        if(sessionStorage?.getItem('userProfile') || sessionStorage?.getItem('token') || sessionStorage?.getItem('routeList')) return
        if(!sessionStorage?.getItem('userProfile') || !sessionStorage?.getItem('token') || !sessionStorage?.getItem('routeList')) {
          // 用户未登录
          history.replace('/users/login')
        }else {
          // 用户满足条件,进行登录信息的检测
          const res = yield call($http.queryUserLogin()) 
          if(res.code !== 0) return
          // 登录成功录取路由表
          const {data: routeList} = yield call($http.queryRouteList())
          sessionStorage?.setItem('routeList',JSON.stringify(routeList))
        }
      }else {
        // 不需要拦截
        sessionStorage?.clear()
        console.log(23131);
      }
    }
  }
}
