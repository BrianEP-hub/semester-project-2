import { getUsername } from './storage.js';
import { pathname } from '../settings/api.js';
import logoutButton from '../components/logoutButton.js';

const createMenu = () => {
  const navbar = document.querySelector('.navbar');

  const username = getUsername();

  let authLink = `<a href="login.html" class="navbar-menu-item ${
    pathname === '/login.html' ? 'active' : ''
  }">Login</a>`;

  if (username) {
    authLink = `<a href="admin.html" class="navbar-menu-item-auth ${
      pathname === '/admin.html' ? 'active' : ''
    }">${username}</a> <button id="logout">Logout ${username}</button>
    `;
  }

  navbar.innerHTML = `
        <nav class="navbar-menu">
            <a href="/" class="navbar-menu-item ${
              pathname === '/index.html' ? 'active' : ''
            }">Home</a>
            <a href="/posts.html" class="navbar-menu-item ${
              pathname === '/posts.html' ? 'active' : ''
            }">Posts</a>
            ${authLink}
        </nav>
    `;

  logoutButton();
};

export default createMenu;
