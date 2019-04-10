import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const createParcelOrderAction = (data, history) => {
  return async dispatch => {
    try {
      const userToken = localStorage.getItem('token');
      const response = await axios.post(
        'https://thawing-woodland-89801.herokuapp.com/api/v1/parcels',
        data,
        { headers: { 'x-auth': userToken } },
      );
      dispatch({
        type: 'CREATE_USER_PARCEL_REQUEST',
        payload: response.data,
      });
      history.push('/dashboard');
      toast.success(<div>Order created successfully</div>);
    } catch (error) {
      dispatch({
        type: 'CREATE_USER_PARCEL_REQUEST_ERROR',
        payload: error.response.data.message,
      });
    }
  };
};

export default createParcelOrderAction;
