import axios from 'axios';

export const signupAction = (data, history) => {
  return async dispatch => {
    try {
      // destructure the response from axios request
      const {data: {user, token}} = await axios.post(
        'https://thawing-woodland-89801.herokuapp.com/api/v1/auth/signup',
        data
      );
      console.log(response.data);
      localStorage.setItem('token', token);
      localStorage.setItem('userid', user.userid);
      localStorage.setItem('firstname', user.firstname);

      // console.log('****response****', response);
      // console.log('****response****', response.status);
      dispatch({
        type: 'SET_CURRENT_USER',
        payload: response
      });
      history.push('/dashboard');
    } catch (error) {
      dispatch({
        type: 'SET_ERROR_MSG',
        payload: error.response.data.message
      });
    }
  };
};
