import { BASE_URL } from './../utils/contsct';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FilmQuery, FilmResponse } from '../types/IFilm';

export const filmApi = createApi({
  reducerPath: 'filmApi',
  tagTypes: ['Films'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getListFilm: builder.query<FilmResponse, FilmQuery>({
      query: ({ page }) => ({
        url: 'list_movies.json',
        params: { page },
      }),
      providesTags: ['Films'],
    }),
  }),
});

export const { useGetListFilmQuery } = filmApi;
