export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-directus',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@pnodev/nuxt-directus',
    'cookie-universal-nuxt',    
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Directus
  router: {
    middleware: ['auth'],
  },
  directus: {
    apiUrl: 'https://api.acme.net', // your API URL
    accessTokenCookieName: 'directus_access_token', // the name of the cookie the access_token will be saved in
    refreshTokenCookieName: 'directus_refresh_token', // the name of the cookie the refresh_token will be saved in
    loginRoute: '/login', // the route containing your login-form
    homeRoute: '/', // the route the user will be redirected to after authentication
    hideLoginWhenAuthenticated: true, // when set to true, authenticated users will be redirected to homeRoute, when accessing loginRoute
  }
}
