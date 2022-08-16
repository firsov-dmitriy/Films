import { BASE_URL, endpointsFilm } from '../utils/contcts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FilmQuery, FilmResponse, FilmsResponse } from '../types/IFilm';

export const filmApi = createApi({
  reducerPath: 'filmApi',
  tagTypes: ['Films'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getListFilm: builder.query<FilmsResponse, FilmQuery>({
      query: ({ page = 1, minimum_rating = 0, genre = '', limit = 1, searchValue }) => ({
        url: endpointsFilm.List,
        params: { page, minimum_rating, genre, limit, query_term: searchValue },
      }),
      providesTags: ['Films'],
    }),
    getOneFilm: builder.query<FilmResponse, { movieId: number }>({
      query: ({ movieId = 1 }) => ({
        url: endpointsFilm.OneFilm,
        params: { movie_id: movieId },
      }),
    }),
  }),
});

export const { useGetListFilmQuery, useGetOneFilmQuery } = filmApi;
