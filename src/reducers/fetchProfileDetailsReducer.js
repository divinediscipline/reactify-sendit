const initialState = {
  isLoading: false,
  profileDetails: {},
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROFILE_DETAILS_REQUEST_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_PROFILE_DETAILS_REQUEST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        profileDetails: action.payload,
      };
    case 'SET_ERROR_MSG':
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
