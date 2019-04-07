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
    case 'CHANGE_DESTINATION_REQUEST_SUCCESS':
      console.log('firing!!!');
      console.log('firing!!!2', { ...state.singleOrder.data, ...action.payload });
      return {
        ...state,
        isLoading: false,
        singleOrder: { ...state.singleOrder.data, ...action.payload },
      };
    case 'CANCEL_ORDER_REQUEST_SUCCESS':
      console.log('called', { ...state.singleOrder.data, ...action.payload });
      return {
        ...state,
        singleOrder: { ...state.singleOrder.data, ...action.payload },
      };

    case 'SET_ERROR_MSG':
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
