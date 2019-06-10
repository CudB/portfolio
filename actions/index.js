import axios from 'axios';
import Cookies from 'js-cookie';

const setAuthHeader = () => {
  if (Cookies.getJSON('jwt')) {
    return { headers: {'authorization': `Bearer ${Cookies.getJSON('jwt')}`} };
  }
}

export const getSecretData = async () => {
  return await axios
    .get('/api/v1/secret', setAuthHeader())
    .then(res => res.data);
}