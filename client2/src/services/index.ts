// webpack 的require.context方法，它可以遍历文件目录，找出所有文件，这样就不用一个一个手动引入了，提取模块内容
const requireApi = require.context('.', true, /.ts$/)
const module = {};

requireApi.keys().forEach((key) => {
  if(key === './index.ts' || key === './http.ts') return;
  Object.assign(module, requireApi(key));
})

export default module;