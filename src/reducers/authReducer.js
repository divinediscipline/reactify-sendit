const initialState = {
  isAuthenticated: false,
  user: {},
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, isAuthenticated: true, user: action.payload };
    case 'SET_ERROR_MSG':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
