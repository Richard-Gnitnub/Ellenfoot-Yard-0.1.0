export default defineNuxtConfig({
  // Extend the Alpine theme
  extends: '@nuxt-themes/alpine',

  // Define the modules you are using
  modules: [
    // Analytics via Plausible
    '@nuxtjs/plausible',
    // Nuxt DevTools for local development (optional in production)
    '@nuxt/devtools',
    '@nuxthq/studio',
    '@nuxt/content'
  ],

  content: {
    highlight: {
      theme: 'github-dark', // or 'dracula', 'nord', etc.
    },
  },

  // Add Vercel compatibility
  nitro: {
    preset: 'vercel-edge', // Use Vercel Edge functions for deployment
  },

  // Add runtime configurations if necessary
  runtimeConfig: {
    public: {
      // Add any environment variables needed at runtime
    },
  },

  // Build configuration
  build: {
    outDir: '.output/public', // Ensure the output directory is correct for Vercel
  },

  // Optional: If you want to exclude dev-only modules in production
  devtools: {
    enabled: false, // Disable in production
  },
});
