/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router/auto'
/**
 * virtual:generated-layouts는 Vite 프로젝트에서 자동으로 레이아웃을 생성하고
 * 관리할 수 있게 도와주는 가상 모듈입니다.
 * 이는 vite-plugin-vue-layouts 플러그인을 통해 제공됩니다.
 * 이 플러그인은 파일 시스템을 기반으로 레이아웃을 자동으로 인식하고,
 * 필요한 설정을 자동으로 적용해 줍니다.
 */
import { setupLayouts } from 'virtual:generated-layouts'
const isServer = import.meta.env.SSR
// 서버 렌더링 중에는 createWebHistory 사용 불가하여 조건문 추가됨
const history = isServer ? createMemoryHistory() : createWebHistory()

const router = createRouter({
  history,
  /**NOTE
   * routes 에러는 왜나는지 모르겠다.
   * 해당 필드가 없다고는 하는데 동작은 되는거보면 원인 파악이 필요
   */
  extendRoutes: setupLayouts,
})

export default router
