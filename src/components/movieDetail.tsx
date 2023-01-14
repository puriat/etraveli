import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react"
import useMovieStore from "../stores/movieStore"

const MovieDetail = () => {
  const movie = useMovieStore((state) => state.selectedMovie)

  return movie ? (
    <Stack p={10} spacing={5}>
      <Heading as="h1" color="gray.700" fontSize="2xl">
        {movie.title}
      </Heading>
      <Text fontSize="sm">{movie.opening_crawl}</Text>
      <Text fontSize="sm">Directed by : {movie.director}</Text>
    </Stack>
  ) : (
    <Center h="100%">
      <Text as="b" fontSize="xl" color="gray.600">
        No Movie Selected
      </Text>
    </Center>
  )
}

export default MovieDetail
