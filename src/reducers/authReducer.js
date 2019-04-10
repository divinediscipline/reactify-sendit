const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: {},
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER_LOADING':
      return { ...state, isLoading: true };
    case 'SET_CURRENT_USER':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case 'SET_ERROR_MSG':
      return { ...state, isLoading: false, error: action.payload };
    case 'SIGN_OUT_USER':
      return initialState;
    default:
      return state;
  }
};
