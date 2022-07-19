import {useState, useContext} from 'react'
import {getUser} from '../context/GithubAPI'
import GithubContext from '../context/GithubContext'
import UserCard from './UserCard'

export default function User({user}) {
  const checkUserExist = Object.keys(user).length !== 0
  const {avatar_url, followers, following, login} = user
  return (
    <>
      {checkUserExist ? (
        <UserCard
          followers={followers}
          following={following}
          img={avatar_url}
          name={login}
        />
      ) : (
        <UserCard
          followers={'-'}
          following={'-'}
          img={avatar_url}
          name={'search for user'}
          idle={true}
        />
      )}
    </>
  )
}
