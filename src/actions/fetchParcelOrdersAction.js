import axios from 'axios';

export const fetchParcelOrdersAction = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        'https://thawing-woodland-89801.herokuapp.com/api/v1/users/:userId/parcels'
      );
      console.log('axiosResponse', response.data);
    //   localStorage.setItem('token', response.data.token);
    //   localStorage.setItem('userid', response.data.user.userid);
    //   localStorage.setItem('firstname', response.data.user.firstname);

      // console.log('****response****', response);
      // console.log('****response****', response.status);
      dispatch({
        type: 'FETCH_USER_PARCELS_REQUEST',
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'SET_ERROR_MSG',
        payload: error.response.data.message
      });
    }
  };
};
