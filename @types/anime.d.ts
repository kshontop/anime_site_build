export interface ICarousel {
  cover?: string;
  poster?: string;
  link?: string;
  title?: string;
  type?: string;
  description?: string;
  released?: string;
}

export interface ITopVfAnime {
  poster?: string;
  title?: string;
  type?: string;
  link?: string;
  episode?: string;
}

export interface ITopVostfrAnime {
  poster?: string;
  title?: string;
  type?: string;
  link?: string;
}

export interface IEpisodeRecent {
  poster?: string;
  title?: string;
  released?: string;
  link?: string;
  episode?: string;
  type?: string;
}

export interface IPopularAnime {
  poster?: string;
  title?: string;
  link?: string;
  description: string;
  type?: String;
}

export interface IAnimeInfo {
  id?: string;
  animeId?: string;
  title?: string;
  description?: string;
  cover?: string;
  poster?: string;
  rating?: string;
  genre?: string[];
  episodes: IEpisode[];
}

export interface IEpisode {
  title?: string;
  src?: string;
}
