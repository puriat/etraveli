import { ChakraProvider } from "@chakra-ui/react"
import Movies from "./pages/movies"

const App = () => {
  return (
    <ChakraProvider>
      <Movies />
    </ChakraProvider>
  )
}

export default App
