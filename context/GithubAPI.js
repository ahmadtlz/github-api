import axios from 'axios'
const GITHUB_URL = process.env.NEXTJS_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.NEXTJS_APP_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
})

export const getUser = async githubuser => {
  const user = await github
    .get(`/users/${githubuser}`)
    .catch(err => (err.response ? err.response : ''))

  return {user: user.data}
}
export const getRepos = async githubuser => {
  const repos = await github
    .get(`/users/${githubuser}/repos`)
    .catch(err => (err.response ? err.response : ''))
  return {repos: repos.data}
}
