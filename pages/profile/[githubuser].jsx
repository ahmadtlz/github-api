import {useContext, useEffect} from 'react'
import {useRouter} from 'next/router'
import {useGetReposAndData} from '../../hooks/useGetReposAndUser'
import UserCard from '../../components/UserCard'
import Layout from '../../components/Layout'

const GithubUser = props => {
  const {user, loading, repos, dispatch, error} = useGetReposAndData()

  if (loading) {
    return <div>loading</div>
  }
  if (error) {
    return <div>{error}</div>
  }
  const {
    name,
    login,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    followers,
    following,
  } = user

  return (
    <Layout>
      <UserCard
        followers={followers}
        following={following}
        img={avatar_url}
        name={login}
        profile={true}
      />
    </Layout>
  )
}

export default GithubUser
