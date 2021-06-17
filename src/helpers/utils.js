export function getFormBody(params) {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // sumit 123 => sumit%20123

    formBody.push(encodedKey + '=' + encodedValue);
  }

  // formBody = ['user%20name=sumit%20123', 'password=123'];
  return formBody.join('&'); // 'user%20name=sumit%20123&password=123'
}

export function getAuthTokenFromLocalStorage() {
  return localStorage.getItem('token');
}
