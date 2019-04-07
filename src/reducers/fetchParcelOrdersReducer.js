const initialState = {
  isLoading: false,
  allUserOrders: {},
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_PARCELS_REQUEST_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_USER_PARCELS_REQUEST':
      return {
        ...state,
        isLoading: false,
        allUserOrders: action.payload,
      };
    case 'SET_ERROR_MSG':
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
