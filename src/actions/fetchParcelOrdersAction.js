import axios from 'axios';

const fetchParcelOrdersAction = () => async (dispatch) => {
  dispatch({ type: 'FETCH_USER_PARCELS_REQUEST_LOADING' });
  try {
    const userToken = localStorage.getItem('token');
    const userid = localStorage.getItem('userid');
    const response = await axios.get(
      `https://thawing-woodland-89801.herokuapp.com/api/v1/users/${userid}/parcels`,
      { headers: { 'x-auth': userToken } },
    );
    dispatch({
      type: 'FETCH_USER_PARCELS_REQUEST',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'SET_ERROR_MSG',
      payload: error.response.data.message,
    });
  }
};

export default fetchParcelOrdersAction;
