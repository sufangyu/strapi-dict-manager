import type { Core } from '@strapi/strapi';

const config: Core.Config.Middlewares = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: '*',
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'x-custom', 'x-custom-interceptor'],
      // // 自动允许请求中带的所有自定义请求头
      // headers: (ctx) => {
      //   // 浏览器预检请求带的 Access-Control-Request-Headers
      //   return ctx.request.header['access-control-request-headers']?.split(',').map(h => h.trim()) || [];
      // },
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

export default config;
