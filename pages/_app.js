import '../styles/globals.css'
import {GithubProvider} from '../context/GithubContext'
function MyApp({Component, pageProps}) {
  return (
    <GithubProvider>
      <Component {...pageProps} />
    </GithubProvider>
  )
}

export default MyApp
