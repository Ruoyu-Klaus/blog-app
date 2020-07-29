/*
@ customlize-cra
@ For: webpack plugin
@ Based on : commonjs
@ The project based on : es
*/

const { override, fixBabelImports, addLessLoader, disableEsLint } = require('customize-cra');

module.exports = override(
  disableEsLint(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  //cutomize theme variables > https://ant.design/docs/react/customize-theme
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#a50052' },
  })
);
