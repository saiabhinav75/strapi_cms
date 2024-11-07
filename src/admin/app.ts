import type { StrapiApp } from '@strapi/strapi/admin';
import authLogo from "./extensions/assets/AuthLogo.jpg"
import HelloWorldButton from './extensions/components/HelloWorldButton';

export default {
  config: {
    auth:{
      logo:authLogo
    },
    // menu:{
    //   logo:authLogo
    // },
    head:{
      favicon:authLogo
    },
    tutorials:false,
    notifications:{
      releases:false
    },
    // theme:{
    //   light:true
    // },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    // app.addComponents({name:"Hello World",Component:HelloWorldButton})
    // app.getAdminInjectedComponents("contentManager",)
    console.log(app);
  },
};
