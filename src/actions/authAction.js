import axios from 'axios';

export const signupAction = (data, history) => {
  return async dispatch => {
    try {
      // destructure the response from axios request
      const response = await axios.post(
        'https://thawing-woodland-89801.herokuapp.com/api/v1/auth/signup',
        data
      );
      console.log('axiosResponse', response.data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userid', response.data.user.userid);
      localStorage.setItem('firstname', response.data.user.firstname);

      // console.log('****response****', response);
      // console.log('****response****', response.status);
      dispatch({
        type: 'SET_CURRENT_USER',
        payload: response.data.user
      });
      history.replace('/dashboard');
    } catch (error) {
      dispatch({
        type: 'SET_ERROR_MSG',
        payload: error.response.data.message
      });
    }
  };
};

export const signinAction = (data, history) => {
  return async dispatch => {
    try {
      // destructure the response from axios request
      const response = await axios.post(
        'https://thawing-woodland-89801.herokuapp.com/api/v1/auth/login',
        data
      );
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userid', response.data.user.userid);
      localStorage.setItem('firstname', response.data.user.firstname);

      // console.log('****response****', response);
      // console.log('****response****', response.status);
      dispatch({
        type: 'SET_CURRENT_USER',
        payload: response.data.user
      });
      history.replace('/dashboard');
    } catch (error) {
      dispatch({
        type: 'SET_ERROR_MSG',
        payload: error.response.data.message
      });
    }
  };
};

export const setIsAuthenticated = userToken => {
  return {
    type: 'SET_CURRENT_USER',
    payload: userToken
  };
};
