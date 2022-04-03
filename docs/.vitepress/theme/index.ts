import DefaultTheme from 'vitepress/theme'
import Tags from './components/Tags.vue'
import Audio from './components/Audio.vue'
import Layout from './components/Layout.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('Tags', Tags)
    app.component('Audio', Audio)
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  },
}
