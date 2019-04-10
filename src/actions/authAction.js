import axios from 'axios';
import { toast } from 'react-toastify';

export const signupAction = (data, history) => async (dispatch) => {
  dispatch({ type: 'SET_CURRENT_USER_LOADING' });
  try {
    const response = await axios.post(
      'https://thawing-woodland-89801.herokuapp.com/api/v1/auth/signup',
      data,
    );
    console.log('axiosResponse', response.data);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('userid', response.data.user.userid);
    localStorage.setItem('firstname', response.data.user.firstname);

    dispatch({
      type: 'SET_CURRENT_USER',
      payload: response.data.user,
    });
    history.replace('/dashboard');
  } catch (error) {
    dispatch({
      type: 'SET_ERROR_MSG',
      payload: error.response.data.message,
    });
    toast.error(error.response.data.message);
  }
};

export const signinAction = (data, history) => async (dispatch) => {
  dispatch({ type: 'SET_CURRENT_USER_LOADING' });
  try {
    const response = await axios.post(
      'https://thawing-woodland-89801.herokuapp.com/api/v1/auth/login',
      data,
    );
    console.log(response.data);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('userid', response.data.user.userid);
    localStorage.setItem('firstname', response.data.user.firstname);

    dispatch({
      type: 'SET_CURRENT_USER',
      payload: response.data.user,
    });
    history.replace('/dashboard');
  } catch (error) {
    dispatch({
      type: 'SET_ERROR_MSG',
      payload: error.response.data.message,
    });
    toast.error(error.response.data.message);
  }
};

export const setIsAuthenticated = userToken => ({
  type: 'SET_CURRENT_USER',
  payload: userToken,
});

export const signOutUser = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: 'SIGN_OUT_USER' });
};
