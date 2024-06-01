// 환경변수 유형을 정의하는 파일이다. 이거 있어야 import.meta.env.{환경변수} 했을떄 에러 안난다.
interface ImportMeta {
    env: {
        VITE_BASE_URL?: string,
    }
}
