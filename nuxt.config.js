module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nested__routes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    ['nuxt-i18n', {
     locales: [{
       code: 'en',
       iso: 'en-US',
       name: 'English',
     },
     {
       code: 'ru',
       iso: 'ru-RU',
       name: 'Russian',
     }
   ],
    parsePages: true,
     defaultLocale: 'en',
     vueI18n: {
       fallbackLocale: 'en',
       messages: {
         en: {
           app_name: 'Test APP',
           index_page: 'Main page',
           profile_page: 'Profile',
           profile_default_child: 'Profile - default child',
           profile_other_child: 'Profile - other child',
         
         },
         ru: {
          app_name: 'Тестовое приложение',
          index_page: 'Главная страница',
          profile_page: 'Профиль',
          profile_default_child: 'Профиль - раздел по умолчанию',
          profile_other_child: 'Профиль - другой раздел',
         },
       }
     }
   }]
 ] ,
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
