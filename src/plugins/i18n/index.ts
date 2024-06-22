import ko from '@/plugins/i18n/locales/ko.json'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'ko',
  fallbackLocale: 'ko',
  legacy: false,
  messages: {
    ko: ko
  }
})

export default i18n
