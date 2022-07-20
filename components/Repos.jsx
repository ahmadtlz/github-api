import React from 'react'
import ReposPagination from './ReposPagination'

export default function Repos({repos}) {
  const checkReposExist = Object.keys(repos).length !== 0
  const sortRepos = checkReposExist
    ? repos
        .sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at))
        .reverse()
    : []
  return <>{<ReposPagination repos={sortRepos} />}</>
}
