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
    case 'CHANGE_DESTINATION_REQUEST_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'CHANGE_DESTINATION_REQUEST_SUCCESS': {
      const newData = { ...state.singleOrder };
      newData.data.destination = action.payload.destination;
      return {
        ...state,
        isLoading: false,
        singleOrder: newData,
      };
    }

    case 'CANCEL_ORDER_REQUEST_SUCCESS': {
      const newData = { ...state.singleOrder };
      newData.data.status = action.payload.status;
      return {
        ...state,
        singleOrder: newData,
      };
    }

    case 'SET_ERROR_MSG':
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
