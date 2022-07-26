import { BASE_URL, endpointsFilm } from './../utils/contsct';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FilmQuery, FilmResponse } from '../types/IFilm';

export const filmApi = createApi({
  reducerPath: 'filmApi',
  tagTypes: ['Films'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getListFilm: builder.query<FilmResponse, FilmQuery>({
      query: ({ page = 1, minimum_rating = 0, genre = '', limit = 20 }) => ({
        url: endpointsFilm.List,
        params: { page, minimum_rating, genre, limit },
      }),
      providesTags: ['Films'],
    }),
    getOneFilm: builder.query({
      query: (movieId: string) => ({
        url: endpointsFilm.OneFilm + movieId,
      }),
    }),
  }),
});

export const { useGetListFilmQuery } = filmApi;
