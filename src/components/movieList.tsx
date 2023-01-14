import {
  Button,
  HStack,
  Skeleton,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react"
import useMovieStore from "../stores/movieStore"

const MovieList = () => {
  const [loading, movies, setSelectedMovie] = useMovieStore((state) => [
    state.fetching,
    state.movies,
    state.setSelectedMovie,
  ])

  return loading ? (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={1}
      align="stretch"
    >
      <Skeleton ml={1} mr={1} height="40px" />
      <Skeleton ml={1} mr={1} height="40px" />
      <Skeleton ml={1} mr={1} height="40px" />
      <Skeleton ml={1} mr={1} height="40px" />
      <Skeleton ml={1} mr={1} height="40px" />
      <Skeleton ml={1} mr={1} height="40px" />
      <Skeleton ml={1} mr={1} height="40px" />
    </VStack>
  ) : (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={1}
      align="stretch"
    >
      {movies.map((movie) => (
        <Button
          key={movie.episode_id}
          colorScheme="teal"
          variant="ghost"
          display="flex"
          textAlign="unset"
          onClick={() => setSelectedMovie(movie)}
        >
          <HStack p={2} spacing={4} flex="1">
            <Text fontSize="xs" color="gray.500">
              EPISODE {movie.episode_id}
            </Text>
            <Text color="gray.600" flex="1">
              {movie.title}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {movie.release_date}
            </Text>
          </HStack>
        </Button>
      ))}
    </VStack>
  )
}

export default MovieList
