/**
 * 构建 样例 路由
 */
const buildExampleRoutes = () => {
  const requireModules = require.context(
    // 其组件目录的相对路径
    '../../example',
    // 是否查询其子目录
    false,
    // 匹配基础组件文件名的正则表达式
    /\.(vue)$/,
  );
  const exampleRoutes = requireModules
    .keys()
    .reduce((_routes, fileName) => {
      const fileNameNew = fileName.replace(/^.\//, '').replace(/.vue$/, '');

      _routes.push({
        // 首页
        path: `/example/${fileNameNew}`,
        name: `__${fileNameNew}`,
        component: () => import(`../../example/${fileNameNew}.vue`),
      });
      return _routes;
    }, []);
  return exampleRoutes;
};
const exampleRoutes = process.env.NODE_ENV === 'production' ? [] : buildExampleRoutes();
export default exampleRoutes;
