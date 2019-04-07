// const initialState = {
//   isLoading: false,
//   destination: '',
//   error: '',
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case 'CHANGE_DESTINATION_REQUEST_LOADING':
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case 'CHANGE_DESTINATION_REQUEST_SUCCESS':
//       return {
//         ...state,
//         isLoading: false,
//         destination: action.payload,
//       };
//     case 'CHANGE_DESTINATION_REQUEST_ERROR':
//       return { ...state, isLoading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
