import axios from 'axios';

const fetchProfileDetailsAction = () => async (dispatch) => {
  dispatch({ type: 'FETCH_PROFILE_DETAILS_REQUEST_LOADING' });
  try {
    const userToken = localStorage.getItem('token');
    const userid = localStorage.getItem('userid');
    const response = await axios.get(
      `https://thawing-woodland-89801.herokuapp.com/api/v1/users/${userid}/profile`,
      { headers: { 'x-auth': userToken } },
    );
    dispatch({
      type: 'FETCH_PROFILE_DETAILS_REQUEST_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'SET_ERROR_MSG',
      payload: error.response.data.message,
    });
  }
};

export default fetchProfileDetailsAction;
