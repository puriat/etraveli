import { Box, Divider, Flex, Stack } from "@chakra-ui/react"
import axios from "axios"
import { useEffect } from "react"
import MovieDetail from "../components/movieDetail"
import MovieFilter from "../components/movieFilter"
import MovieList from "../components/movieList"
import useMovieStore from "../stores/movieStore"

const Movies = () => {
  const setMovies = useMovieStore((state) => state.setMovies)

  useEffect(() => {
    axios
      .get<GeneralResultModel<MovieModel[]>>(
        "https://swapi.dev/api/films/?format=json"
      )
      .then((res) => {
        setMovies(res.data.results)
      })
  }, [])

  return (
    <Stack>
      <MovieFilter />
      <Flex h="100vh">
        <Box flex="1">
          <MovieList />
        </Box>
        <Divider orientation="vertical" />
        <Box flex="1">
          <MovieDetail/>
        </Box>
      </Flex>
    </Stack>
  )
}

export default Movies
