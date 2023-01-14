import { SearchIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  StackDivider,
  useDisclosure,
} from "@chakra-ui/react"
import { ChangeEvent, ChangeEventHandler } from "react"
import useMovieStore from "../stores/movieStore"
import { MovieSortType } from "../types/movieSortType"

const MovieDropDown = () => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const onMovieSort = useMovieStore((state) => state.onMovieSort)

  const onSortSelect = (sort: MovieSortType) => {
    onMovieSort(sort)
    onClose()
  }
  return (
    <Popover
      placement="bottom-start"
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <PopoverTrigger>
        <Button colorScheme="blackAlpha" variant="outline" bg="white" size="sm">
          Sort by...
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverHeader>Sort by</PopoverHeader>
        <PopoverBody p={0}>
          <Stack spacing={0} divider={<StackDivider borderColor="gray.200" />}>
            <Button
              colorScheme="blackAlpha"
              variant="ghost"
              display="flex"
              justifyContent="flex-start"
              onClick={() => onSortSelect(MovieSortType.Episode)}
            >
              Episode
            </Button>
            <Button
              colorScheme="blackAlpha"
              variant="ghost"
              display="flex"
              justifyContent="flex-start"
              onClick={() => onSortSelect(MovieSortType.Year)}
            >
              Year
            </Button>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

const MovieSearch = () => {
  const onMovieSearch = useMovieStore((state) => state.onMovieSearch)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onMovieSearch(event.target.value)
  }

  return (
    <InputGroup size="sm" bg="white">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input placeholder="Type to search..." onChange={onChange} />
    </InputGroup>
  )
}

const MovieFilter = () => {
  return (
    <HStack p={4} bg="blackAlpha.50">
      <MovieDropDown />
      <MovieSearch />
    </HStack>
  )
}

export default MovieFilter
