import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const changeDestinationAction = data => async (dispatch) => {
  try {
    const userToken = localStorage.getItem('token');
    const urlParams = new URLSearchParams(window.location.search);
    const parcelId = urlParams.get('parcelid');
    const response = await axios.put(
      `https://thawing-woodland-89801.herokuapp.com/api/v1/parcels/${parcelId}/destination`,
      data,
      { headers: { 'x-auth': userToken } },
    );
    const newDestinationObj = {
      destination: response.data.data.destination,
    };
    dispatch({
      type: 'CHANGE_DESTINATION_REQUEST_SUCCESS',
      payload: newDestinationObj,
    });
    toast.success(<div>Destination changed successfully</div>);
  } catch (error) {
    dispatch({
      type: 'SET_ERROR_MSG',
      payload: error.response.data.message,
    });
  }
};

export default changeDestinationAction;
