import {useState, useContext} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import GithubContext from '../context/GithubContext'
import {
  Container,
  FormControl,
  Input,
  Button,
  Box,
  Spinner,
  useColorModeValue,
} from '@chakra-ui/react'

import {getUser} from '../context/GithubAPI'

import UserCard from '../components/UserCard'
import User from '../components/User'
import Loading from '../components/Loading'
import SearchInput from '../components/SearchInput'
import Layout from '../components/Layout'

export default function Home() {
  const {user, dispatch, loading, error} = useContext(GithubContext)

  return (
    <Layout centerContent>
      <Box my={10}>
        <Image src="/github.svg" width={124} height={124} alt="logo" />
      </Box>
      <SearchInput dispatch={dispatch} loading={loading} />
      {loading ? (
        <Loading />
      ) : (
        <>
          {Boolean(error) ? (
            <UserCard error={error} message={error} img="/error.svg" />
          ) : (
            <User user={user} />
          )}
        </>
      )}
    </Layout>
  )
}
