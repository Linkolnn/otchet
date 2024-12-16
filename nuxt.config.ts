// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";

export default defineNuxtConfig({
  ssr: false,
  devtools: {enabled: false},
  modules: ["@pinia/nuxt", "nuxt-svgo", "@nuxt/fonts", "@nuxtjs/i18n"],
    experimental: {
        externalVue: false,
    },

  plugins: ['~/plugins/fetchRequest.js'],

  svgo: {
      autoImportPath: "./assets/icons/",
      componentPrefix: "Icon",
  },

  i18n: {
      locales: ['ru', 'en'], // Добавьте ваши локали
      defaultLocale: 'ru',
      strategy: 'prefix_except_default',
      routesNameSeparator: '___',
      detectBrowserLanguage: false
  },

  alias: {
      '@components': resolve(__dirname, './components'),
      '@color': resolve(__dirname, './const/color.sass'),
      '@global': resolve(__dirname, './const/global.sass'),
      '@mixin': resolve(__dirname, './const/mixin.sass'),
      '@fonts': resolve(__dirname, './const/fonts.sass'),
  },

  build: {
      postcss: {
          plugins: {
              'postcss-import': {},
              'postcss-url': {},
              'postcss-preset-env': {
                  stage: 2,
              },
          },
      },
      sass: {
          implementation: require('sass'),
      },
  },

    fonts: {
        provider: "local",
        defaults: {
            weights: [300, 400, 500, 700, 900],
        },
        families: [
            {
                name: "Source-Sans-3",
                src: [
                    {url: "/fonts/SourceSans3-Black.ttf", format: "'truetype'"},
                ],
                global: true,
                weight: "900",
                style: 'normal'
            },
            {
                name: "Source-Sans-3",
                src: [
                    {url: "/fonts/SourceSans3-Bold.ttf", format: "'truetype'"},
                ],
                global: true,
                weight: "700",
                style: 'normal'
            },
            {
                name: "Source-Sans-3",
                src: [
                    {url: "/fonts/SourceSans3-Medium.ttf", format: "'truetype'"},
                ],
                global: true,
                weight: "500",
                style: 'normal'
            },
            {
                name: "Source-Sans-3",
                src: [
                    {url: "/fonts/SourceSans3-Regular.ttf", format: "'truetype'"},
                ],
                global: true,
                weight: "400",
                style: 'normal'
            },
            {
                name: "Source-Sans-3",
                src: [
                    {url: "/fonts/SourceSans3-Light.ttf", format: "'truetype'"},
                ],
                global: true,
                weight: "300",
                style: 'normal'
            },
        ],
    },


  sourcemap: {client: false, server: false},

  vite: {
      css: {
          preprocessorOptions: {
              sass: {
                  api: "modern-compiler",
              },
          },
      },
  },

  compatibilityDate: "2024-10-28",
});
