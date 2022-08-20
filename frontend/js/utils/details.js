import { baseUrl } from '../settings/api.js';
import createMenu from './createMenu.js';

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

const productUrl = baseUrl + '/posts/' + id;

createMenu();

(async () => {
  const response = await fetch(productUrl);
  const details = await response.json();

  document.title = details.title;

  const container = document.querySelector('.container-details');

  container.innerHTML = `   
                            <div class="details-content">
                                <h3 details-content-header>${details.title}</h3>
                                <p>${details.longInfo}</p>
                            </div>
                     
    `;
})();
