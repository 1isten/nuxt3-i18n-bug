export default defineNuxtConfig({
  ssr: true, // bug only happens in SSR mode + nuxt generate
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'EN',
      },
      {
        code: 'fr',
        name: 'FR',
      },
      {
        code: 'es',
        name: 'ES',
      }
    ],
    vueI18n: {
      legacy: false,
      locale: 'en',
      fallbackLocale: ['en'],
      messages: {
        en: {
          welcome: 'Welcome',
        },
        fr: {
          welcome: 'Bienvenue',
        },
        es: {
          welcome: 'Bienvenido',
        },
      },
    },
  },
});
