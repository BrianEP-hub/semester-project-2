import { baseUrl } from '../settings/api.js';
import { displayMessage } from '../common/displayMessage.js';
import createMenu from '../utils/createMenu.js';
import { saveToken, saveUser, getToken } from '../utils/storage.js';

createMenu();
const token = getToken();

const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const message = document.querySelector('.container-message');

const submitForm = e => {
  e.preventDefault();

  message.innerHTML = '';

  const userVal = username.value.trim();
  const pwdVal = password.value.trim();

  if (userVal.length === 0 || pwdVal.length === 0) {
    return displayMessage(
      'warning',
      'Please enter Username/Password',
      '.container-message',
    );
  }
  login(userVal, pwdVal);
};

form.addEventListener('submit', submitForm);

const login = async (username, password) => {
  const url = baseUrl + '/auth/local';

  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json',
    },
  };

  try {
    const resp = await fetch(url, options);
    const data = await resp.json();
    console.log(data);
    if (data.user) {
      saveToken(data.jwt);
      saveUser(data.user);

      location.href = '/admin.html';
    }
    if (data.error) {
      displayMessage(
        'warning',
        'Username/Password is incorrect',
        '.container-message',
      );
    }
  } catch (error) {
    console.error(error);
  }
};
