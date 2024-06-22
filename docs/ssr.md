### SSR 적용 후 발생하는 문제 정리
yarn build 후 접속시 404 발생


yarn dev 후 접속 시 에러 발생
- src/router/index.ts 에서 routes 가 적용안됐기 때문에 아래 에러가 발생 추정중
```
TypeError: Cannot read properties of undefined (reading 'forEach')
    at createRouterMatcher (file:///C:/git/movie/movie-web/node_modules/vue-router/dist/vue-router.mjs:1637:12)
    at Module.createRouter (file:///C:/git/movie/movie-web/node_modules/vue-router/dist/vue-router.mjs:2995:21)
    at C:\git\movie\movie-web\src\router\index.ts:21:16
    at async instantiateModule (file:///C:/git/movie/movie-web/node_modules/vite/dist/node/chunks/dep-cNe07EU9.js:55058:9)
```