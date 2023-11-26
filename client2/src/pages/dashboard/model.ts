import $http from "api"

export default {
  namespace: "dashboard",
  state: {
    amountDataList: [
    ],
    staffList: {
    },   
  },

  effects: {
    *initDashboradList({},{put,call}) {
      console.log($http,'http');
      
      const {data} = yield call($http.analyzeStaff)
      console.log(data);
    }
  }
}