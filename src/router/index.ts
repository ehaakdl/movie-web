/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
/**
 * virtual:generated-layouts는 Vite 프로젝트에서 자동으로 레이아웃을 생성하고
 * 관리할 수 있게 도와주는 가상 모듈입니다.
 * 이는 vite-plugin-vue-layouts 플러그인을 통해 제공됩니다.
 * 이 플러그인은 파일 시스템을 기반으로 레이아웃을 자동으로 인식하고,
 * 필요한 설정을 자동으로 적용해 줍니다.
 */
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  extendRoutes: setupLayouts,
})

export default router
