import { LOGIN_START } from './actionTypes';
import { APIUrls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function login(email, password) {
  return (dispatch) => {
    const url = APIUrls.login();
    fetch(url, {
      method: 'POST', // Default it's GET request
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // To tell teh server that it's form data and not json(Which is by default)
      },
      body: getFormBody({ email, password }),
    });
  };
}
