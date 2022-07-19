const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USER_AND_REPOS':
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      }
    case 'GET_USER':
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      }
    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload.repos,
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
