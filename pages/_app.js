import {ChakraProvider} from '@chakra-ui/react'
import {GithubProvider} from '../context/GithubContext'
function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider>
      <GithubProvider>
        <Component {...pageProps} />
      </GithubProvider>
    </ChakraProvider>
  )
}

export default MyApp
