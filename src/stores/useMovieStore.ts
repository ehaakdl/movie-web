
import { defineStore } from 'pinia'
import { CommonResponse, MovieSearchRequest } from './typed';
import axiosInst from '@axios';

import { SortOrder, MovieApiProvider } from '@/stores/constants'

export const useMovieStore = defineStore('useMovieStore', () => {
  const defaultMovieSearchRequest: MovieSearchRequest = {
    provider: MovieApiProvider.Kobis,
    sortOrder: SortOrder.Desc,           // 기본값 'asc'
    sortBy: 'createdAt',            // 기본값 'title'
    movieName: '',              // 기본값 빈 문자열
    page: 1,                    // 기본값 1
    pageSize: 10,
  };

  function createSearchRequest(overrides: Partial<MovieSearchRequest> = {}): MovieSearchRequest {
    return { ...defaultMovieSearchRequest, ...overrides };
  }


  async function getMovies(params: MovieSearchRequest) {
    return axiosInst.get('/movie/search', { params })
      .then((res) => {
        return res
      })
      .catch((error) => {
        return error
      });
  }

  return { getMovies, createSearchRequest }
})
