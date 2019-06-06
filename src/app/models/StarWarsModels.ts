export interface IStarWarsResponse {
  results: IFilms[]
}

export interface IFilms {
  title: string;
  episode_id: number;
  release_date: string;
  opening_crawl: string;
  producer:string;
}


