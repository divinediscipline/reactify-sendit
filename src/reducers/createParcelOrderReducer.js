const initialState = {
  user: {},
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_USER_PARCEL_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_ERROR_MSG':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
