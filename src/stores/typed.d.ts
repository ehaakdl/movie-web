import { SortOrder, MovieApiProvider, ResponseStatus } from '@/stores/constants'

export interface UserRegisterRequest {
  email: string,
  password: string
}

export interface CommonResponse {
  contents?,
  error?,
  message?: string
  status: ResponseStatus
}
export interface MovieSearchRequest {
  provider: MovieApiProvider;
  sortOrder: SortOrder // 정렬 순서는 asc(오름차순) 또는 desc(내림차순) 중 하나일 수 있음
  sortBy: string; // 정렬 기준을 나타내는 문자열
  movieName?: string; // 영화 이름
  page: number; // 현재 페이지 번호
  pageSize: number; // 페이지당 항목 수
  startCreatedAt?: string; // 시작 날짜 및 시간 (ISO 8601 형식)
  endCreatedAt?: string; // 종료 날짜 및 시간 (ISO 8601 형식)
}
