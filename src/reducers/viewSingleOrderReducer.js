const initialState = {
  isLoading: false,
  singleOrder: {},
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SINGLE_ORDER_REQUEST_LOADING':
      return {
        ...state,
        isLoading: true,
        singleOrder: {},
      };
    case 'FETCH_SINGLE_ORDER_REQUEST':
      return {
        ...state,
        isLoading: false,
        singleOrder: action.payload,
      };
    case 'SET_ERROR_MSG':
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
