import {useContext, useEffect} from 'react'
import {useRouter} from 'next/router'
import GithubContext from '../../context/GithubContext'
import {getUser, getRepos} from '../../context/GithubAPI'

const GithubUser = props => {
  const {user, loading, repos, dispatch, error} = useContext(GithubContext)
  const checkUserExist = Object.keys(user).length !== 0
  const router = useRouter()
  const {githubuser} = router.query
  console.log(repos)
  const checkUserData = userData => {}

  useEffect(() => {
    if (!router.isReady) return
    dispatch({type: 'SET_LOADING'})
    ;(async () => {
      const userData = checkUserExist ? user : await getUser(githubuser)
      const reposData = await getRepos(githubuser)
      if (
        userData.user.message === 'Not Found' &&
        reposData.repos.message === 'Not Found'
      ) {
        dispatch({
          type: 'GET_GITHUB_FAILURE',
          payload: 'Try again, user not found',
        })
        return
      } else if (
        userData.user.message === 'Bad credentials' &&
        reposData.repos.message === 'Bad credentials'
      ) {
        dispatch({
          type: 'GET_GITHUB_FAILURE',
          payload: 'The token needs to be set in configuration file',
        })
        return
      } else {
        if (checkUserExist) {
          dispatch({type: 'GET_REPOS', payload: reposData})
        } else {
          dispatch({type: 'GET_USER', payload: userData})
          dispatch({type: 'GET_REPOS', payload: reposData})
        }
      }
    })()
  }, [checkUserExist, dispatch, githubuser, router.isReady, user])

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user

  if (loading) {
    return <div>loading</div>
  }
  if (error) {
    return <div>{error}</div>
  }
  return (
    <div>
      <h1>{name}</h1>
      <h2>{type}</h2>
      {followers}
    </div>
  )
}

export default GithubUser
