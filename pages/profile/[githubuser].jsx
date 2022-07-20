import {useContext, useEffect} from 'react'
import {useGetReposAndData} from '../../hooks/useGetReposAndUser'
import UserCard from '../../components/UserCard'
import Layout from '../../components/Layout'
import User from '../../components/User'
import Loading from '../../components/Loading'
import Repos from '../../components/Repos'

const GithubUser = () => {
  const {user, loading, repos, dispatch, error} = useGetReposAndData()

  return (
    <Layout
      display={'flex'}
      flexDir={['column', 'row']}
      justifyContent={'space-between'}
      px={0}
      width={'100%'}
      maxW={'100%'}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          {Boolean(error) ? (
            <UserCard
              error={error}
              message={error}
              img="/error.svg"
              profile={true}
            />
          ) : (
            <>
              <User user={Boolean(user.message) ? [] : user} profile={true} />
              <Repos repos={Boolean(repos.message) ? [] : repos} />
            </>
          )}
        </>
      )}
    </Layout>
  )
}

export default GithubUser
