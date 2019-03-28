const initialState = {
  fetchParcels: false,
  user: [],
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_PARCELS_REQUEST':
      return {
        ...state,
        fetchParcels: true,
        user: state.user.concat(action.payload)
      };
    case 'SET_ERROR_MSG':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
