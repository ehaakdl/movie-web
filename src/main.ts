/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from '@/App.vue'
import { createSSRApp } from 'vue'

export function createApp() {
  const app = createSSRApp(App)
  registerPlugins(app)

  return { app }
}
