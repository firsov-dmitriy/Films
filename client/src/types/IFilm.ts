interface FilmTorrent {
  url: string;
  data_uploaded: string;
  quality: string;
  hash: string;
}
interface FilmsData {
  limit: string;
  movie_count: string;
  movies: IFilm[];
  page_number: number;
}
interface FilmData {
  limit: string;
  movie_count: string;
  movie: IFilm;
  page_number: number;
}
export interface IFilm {
  id: number;
  background_image: string;
  background_image_original: string;
  description_full: string;
  language: string;
  large_cover_image: string;
  medium_cover_image: string;
  title: string;
  torrents: FilmTorrent[];
}
export interface FilmsResponse {
  data: FilmsData;
  status: string;
  status_message: string;
}
export interface FilmQuery {
  page?: number;
  minimum_rating?: number;
  genre?: string;
  limit?: number;
  searchValue?: string;
}

export interface FilmResponse {
  data: FilmData;
  status: string;
  status_message: string;
}
