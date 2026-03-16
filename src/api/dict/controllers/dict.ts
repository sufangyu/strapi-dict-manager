export default {
  async options(ctx) {
    return strapi
      .service('api::dict.dict')
      .getOptions();
  },

  async getDicts(ctx) {
    const { codes = [] } = ctx.request.body;
    return strapi
      .service('api::dict.dict')
      .getDicts(codes);
  },

  // 外部字典
  async getExternalDicts(ctx) {
    const { codes = [] } = ctx.request.body;
    return strapi
      .service('api::dict.dict')
      .getExternalDicts(codes);
  },

  // 自定义请求设置
  async getDictRequestSetting(ctx) {
    const { codeList = '' } = ctx.request.query;
    const codes: string[] = codeList ? codeList?.split(',') : [];
    return strapi
      .service('api::dict.dict')
      .getDictRequestSetting(codes);
  }
};