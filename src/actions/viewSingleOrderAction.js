import axios from 'axios';

const viewSingleOrderAction = () => async (dispatch) => {
  dispatch({ type: 'FETCH_SINGLE_ORDER_REQUEST_LOADING' });
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const parcelId = urlParams.get('parcelid');
    const userToken = localStorage.getItem('token');
    const userid = localStorage.getItem('userid');
    const response = await axios.get(
      `https://thawing-woodland-89801.herokuapp.com/api/v1/parcels/${parcelId}`,
      { headers: { 'x-auth': userToken } },
    );
    console.log('fetchAxiosResponse', response.data);
    dispatch({
      type: 'FETCH_SINGLE_ORDER_REQUEST',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'SET_ERROR_MSG',
      payload: error.response.data.message,
    });
  }
};

export default viewSingleOrderAction;
