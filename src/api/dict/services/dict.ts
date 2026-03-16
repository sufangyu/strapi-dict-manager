import { DICT_DATA, DICT_EXTERNAL_DATA } from "../data";

export default {
  async getOptions() {
    return [];
  },

  async getDicts(codes: string[] = []) {
    const result = DICT_DATA.filter(item => codes.includes(item.value));
    return getResponseWithBaseData(result);
  },

  async getExternalDicts(codes: string[] = []) {
    const result = [...DICT_DATA, ...DICT_EXTERNAL_DATA].filter(item => codes.includes(item.value));
    return getResponseWithBaseData(result);
  },

  async getDictRequestSetting(codes = []) {
    const result = {};
    codes.forEach((code) => {
      const curDict = DICT_DATA.find(item => item.value === code);
      result[code] = {
        ...curDict,
      };
    });

    return {
      code: '200',
      successful: true,
      data: result,
    };
  },
};



/**
 * 获取响应数据
 * @param data 数据
 * @returns 响应数据
 */
function getResponseWithBaseData(data: any) {
  return {
    code: 200,
    success: true,
    data,
  };
}