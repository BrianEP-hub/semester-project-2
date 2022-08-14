import { clearStorage } from '../utils/storage.js';

const logoutButton = () => {
  const button = document.querySelector('#logout');

  if (button) {
    button.onclick = () => {
      const doLogout = confirm('Are you sure?');

      if (doLogout) {
        clearStorage();
        location.href = 'index.html';
      }
    };
  }
};

export default logoutButton;
