import {useState, useContext} from 'react'
import {getUser} from '../context/GithubAPI'
import GithubContext from '../context/GithubContext'
import UserCard from './UserCard'

export default function User({user, profile = false}) {
  const checkUserExist = Object.keys(user).length !== 0
  const {name, login, avatar_url, location, bio, blog, followers, following} =
    user
  return (
    <>
      {checkUserExist ? (
        <UserCard
          followers={followers}
          following={following}
          img={avatar_url}
          name={login}
          realName={name}
          bio={bio}
          blog={blog}
          location={location}
          profile={profile}
        />
      ) : (
        <UserCard
          followers={'-'}
          following={'-'}
          img={avatar_url}
          name={'search for user'}
          idle={true}
          profile={profile}
        />
      )}
    </>
  )
}
