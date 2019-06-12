import axios from 'axios';
import Cookies from 'js-cookie';

import { getCookieFromReq } from '../helpers/utils';

const setAuthHeader = (req) => {
  const token = req.headers.cookie ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');
  if (token) {
    return { headers: {'authorization': `Bearer ${token}`} };
  }

  return undefined;
}

export const getSecretData = async (req) => {
  const url = 'http://localhost:3000/api/v1/secret';

  return await axios.get(url, setAuthHeader(req))
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    })
    .then(res => res.data);
}