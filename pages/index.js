import {useState, useContext} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {getUser} from '../context/GithubAPI'
import GithubContext from '../context/GithubContext'

export default function Home() {
  const [search, setSearch] = useState()

  const [text, setText] = useState('')

  const {user, dispatch, loading, error} = useContext(GithubContext)

  const handleChange = e => setText(e.target.value)

  const handleSubmit = async e => {
    e.preventDefault()

    if (text.trim() === '') {
      dispatch({
        type: 'GET_GITHUB_FAILURE',
        payload: 'Please enter something',
      })
    } else {
      dispatch({type: 'SET_LOADING'})
      const userData = await getUser(text)
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

      setText('')
    }
  }
  if (loading) {
    return <div>loading</div>
  }

  console.log('error', error)
  return (
    <div className={styles.container}>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {text && text}
      <Link href="/profile/defunkt"> get data</Link>
    </div>
  )
}
