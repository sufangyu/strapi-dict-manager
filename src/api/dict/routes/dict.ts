export default {
  routes: [
    {
      method: 'GET',
      path: '/dict/options',
      handler: 'dict.options',
      config: {
        auth: false
      }
    },

    {
      method: 'POST',
      path: '/dict/base',
      handler: 'dict.getDicts',
      config: {
        auth: false
      }
    },

    // 外部字典
    {
      method: 'POST',
      path: '/dict/external',
      handler: 'dict.getExternalDicts',
      config: {
        auth: false
      }
    },

    // 自定义请求设置
    {
      method: 'GET',
      path: '/dict/request-setting',
      handler: 'dict.getDictRequestSetting',
      config: {
        auth: false
      }
    }
  ],
};