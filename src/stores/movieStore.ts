import { create } from "zustand"
import { MovieSortType } from "../types/movieSortType"

interface MovieState {
  fetching: boolean
  fetchedMoviesFromApi: MovieModel[] // this is the original movies fetched from the api
  movies: MovieModel[]
  selectedMovie?: MovieModel
  keyword: string
  sort: MovieSortType
  setMovies: (movies: MovieModel[]) => void
  setSelectedMovie: (movie: MovieModel) => void
  onMovieSearch: (keyword: string) => void
  onMovieSort: (sort: MovieSortType) => void
}

const getMovies = (
  movies: MovieModel[],
  keyword: string,
  sort: MovieSortType
) => {
  const lowerCasedKeyword = keyword.toLowerCase()
  const filteredMoviesByKeyword = movies.filter((movie) =>
    movie.title.toLowerCase().includes(lowerCasedKeyword)
  )

  return sort === MovieSortType.None
    ? filteredMoviesByKeyword
    : filteredMoviesByKeyword.sort((a, b) => {
        if (sort === MovieSortType.Episode) {
          return a.episode_id - b.episode_id
        } else {
          return a.year! - b.year!
        }
      })
}

const useMovieStore = create<MovieState>((set, get) => ({
  fetching: true,
  fetchedMoviesFromApi: [],
  movies: [],
  keyword: "",
  sort: MovieSortType.None,
  setMovies: (movies: MovieModel[]) => {
    const moviesWithYear = movies.map((movie) => ({
      ...movie,
      year: parseInt(movie.release_date.split("-")[0]), // getting year from release date and store it inside movie object
    }))
    set({
      movies: moviesWithYear,
      fetchedMoviesFromApi: moviesWithYear,
      fetching: false,
    })
  },
  setSelectedMovie: (movie: MovieModel) => set({ selectedMovie: movie }),
  onMovieSearch: (keyword: string) =>
    set({
      keyword,
      movies: getMovies(get().fetchedMoviesFromApi, keyword, get().sort),
    }),
  onMovieSort: (sort: MovieSortType) =>
    set({
      sort,
      movies: getMovies(get().fetchedMoviesFromApi, get().keyword, sort),
    }),
}))

export default useMovieStore
