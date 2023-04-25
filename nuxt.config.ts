// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@quasar/extras/material-icons/material-icons.css"],
  modules: ["nuxt-quasar-ui", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  pages: true,
  components: [
    {
      path: "@/components",
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    public: {
      imgur_client_secret: process.env.IMGUR_CLIENT_SECRET,
    },
  },
  quasar: {
    config: {
      dark: "auto",
      brand: {
        primary: "#0468FC",
        secondary: "#D0BCFF",
      },
      notify: {
        position: "top-right",
      },
    },
    cssAddon: true,
    lang: "pt-BR",
    plugins: ["Dialog", "Notify"],
    extras: {
      font: "roboto-font",
    },
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
});
