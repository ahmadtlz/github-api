const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        user: action.payload.user,
        error: '',
        loading: false,
      }
    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload.repos,
        error: '',
        loading: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'GET_GITHUB_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default githubReducer
