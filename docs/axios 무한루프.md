### axios 등록시 call stack 메모리 초과 에러 발생

axios.create()로 만들어서 createApp.use(axios) 로 주입하려던게 문제였다.



### code snipet
```
import axios from '@/plugins/axios'

// Composables
import { createApp } from 'vue'

const app = createApp(App)


app.use(axios)
app.mount('#app')
```