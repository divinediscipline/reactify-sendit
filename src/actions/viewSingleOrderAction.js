import axios from 'axios';
import { toast } from 'react-toastify';

export const viewSingleOrderAction = () => async (dispatch) => {
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

export const cancelOrderAction = () => async (dispatch) => {
  //   dispatch({ type: 'CHANGE_DESTINATION_REQUEST_LOADING' });
  try {
    const userToken = localStorage.getItem('token');
    const urlParams = new URLSearchParams(window.location.search);
    const parcelId = urlParams.get('parcelid');
    console.log('usertoken', userToken);
    const response = await axios.put(
      `https://thawing-woodland-89801.herokuapp.com/api/v1/parcels/${parcelId}/cancel`,
      { data: 'test' },
      { headers: { 'x-auth': userToken } },
    );

    console.log(response);
    dispatch({
      type: 'CANCEL_ORDER_REQUEST_SUCCESS',
      payload: { status: 'Cancelled' },
    });
    //   toast.success(<div>Order created successfully</div>);
  } catch (error) {
    dispatch({
      type: 'SET_ERROR_MSG',
      payload: error.response.data.message,
    });
  }
};
