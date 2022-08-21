import { baseUrl } from '../settings/api.js';
import { getToken } from '../utils/storage.js';

export const deleteButton = id => {
  const container = document.querySelector('.container-delete');

  container.innerHTML = `<button type="button" class="button-delete">Delete</button>`;

  const button = document.querySelector('.button-delete');

  button.onclick = async () => {
    const doDelete = confirm('Delete post?');

    if (doDelete) {
      const url = baseUrl + '/posts/' + id;

      const token = getToken();

      const options = {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const resp = await fetch(url, options);
        const data = await resp.json();

        location.href = '/posts.html';
      } catch (error) {
        console.error(error);
      }
    }
  };
};
