/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from '@/plugins/vuetify'
import pinia from '@/plugins/pinia'
import router from '@/plugins/router'
import i18n from '@/plugins/i18n'

// Types
import type { App } from 'vue'


export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(i18n)
}
