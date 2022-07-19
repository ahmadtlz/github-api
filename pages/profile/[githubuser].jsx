import {useContext, useEffect} from 'react'
import {useRouter} from 'next/router'
import {useGetReposAndData} from '../../hooks/useGetReposAndUser'

const GithubUser = props => {
  const {user, loading, repos, dispatch, error} = useGetReposAndData()

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
