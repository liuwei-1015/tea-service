/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {}
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1624291358971_9689'

  // add your middleware config here
  config.middleware = []
  //mongoose配置
  config.mongoose = {
    url: 'mongodb://localhost:27017/tea?readPreference=primary&appname=MongoDB%20Compass&ssl=false',
    options: {}
  }
  config.security = {
    csrf: {
      headerName: 'x-csrf-token' // 自定义请求头
    }
  }
  //jwt配置
  config.jwt = {
    secret: 'lw',
    enable: true
  }
  
  return {
    ...config
  }
}
