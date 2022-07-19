import {useState, useEffect, useRef} from 'react'

import {getUser} from '../context/GithubAPI'

import {FormControl, Input, Button, useColorModeValue} from '@chakra-ui/react'

export default function SearchInput({dispatch, loading}) {
  const [search, setSearch] = useState('')
  const handleChange = e => setSearch(e.target.value)

  const textInput = useRef(null)

  useEffect(() => {
    textInput.current.focus()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()

    if (search.trim() === '') {
      dispatch({
        type: 'GET_GITHUB_FAILURE',
        payload: 'Please enter something',
      })
    } else {
      dispatch({type: 'SET_LOADING'})
      const userData = await getUser(search)
      if (userData.user.message === 'Not Found') {
        dispatch({
          type: 'GET_GITHUB_FAILURE',
          payload: 'Try again, user not found',
        })
        return null
      } else if (userData.user.message === 'Bad credentials') {
        dispatch({
          type: 'GET_GITHUB_FAILURE',
          payload: 'The token needs to be set in configuration file',
        })
        return null
      } else {
        dispatch({type: 'GET_USER', payload: userData})
      }

      setSearch('')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Input
          bg={'white'}
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
          ref={textInput}
        />

        <Button
          isLoading={loading}
          type="submit"
          mt={4}
          w={'full'}
          bg={useColorModeValue('#151f21', 'gray.900')}
          color={'white'}
          rounded={'md'}
        >
          Search for user
        </Button>
      </FormControl>
    </form>
  )
}
