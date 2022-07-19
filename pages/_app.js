import {ChakraProvider} from '@chakra-ui/react'
import {GithubProvider} from '../context/GithubContext'
import '../styles/globals.css'
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
