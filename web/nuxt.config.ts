import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['vuetify-nuxt-module', '@nuxtjs/strapi'],

  runtimeConfig: {
    public: {
      strapiUrl: ''
    }
  }

})