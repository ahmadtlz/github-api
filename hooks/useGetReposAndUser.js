import {useContext, useEffect} from 'react'
import {useRouter} from 'next/router'
import GithubContext from '../context/GithubContext'
import {getUser, getRepos} from '../context/GithubAPI'

export function useGetReposAndData() {
  const {user, loading, repos, dispatch, error} = useContext(GithubContext)
  const checkUserExist = Object.keys(user).length !== 0
  const router = useRouter()
  const {githubuser} = router.query

  useEffect(() => {
    if (!router.isReady) return
    dispatch({type: 'SET_LOADING'})
    ;(async () => {
      const userData = checkUserExist ? user : await getUser(githubuser)
      const reposData = await getRepos(githubuser)
      if (
        userData.message === 'Not Found' &&
        reposData.repos.message === 'Not Found'
      ) {
        dispatch({
          type: 'GET_GITHUB_FAILURE',
          payload: 'Try again, user not found',
        })
        return
      } else if (
        userData.message === 'Bad credentials' &&
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
  }, [checkUserExist, dispatch, githubuser, user, router.isReady])

  return {user, loading, repos, dispatch, error}
}
