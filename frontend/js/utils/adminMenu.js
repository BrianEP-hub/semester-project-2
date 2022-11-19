import { getUsername } from './storage.js';

const adminMenu = () => {
  const container = document.querySelector('.container-admin');

  const userName = getUsername();

  let adminLink = '';

  if (userName) {
    adminLink = `
            <div>
            <button id="add">Add</button>
            <span class="spacer"></span>
            <a href="edit.html" class="edit">Edit</a>
        `;
  }

  container.innerHTML = `${adminLink}`;
};

export default adminMenu;
