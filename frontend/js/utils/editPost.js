import { deleteButton } from '../components/deleteButton.js';
import { baseUrl } from '../settings/api.js';
import { getToken } from './storage.js';
import { displayMessage } from '../common/displayMessage.js';

const token = getToken();

if (!token) {
  location.href = 'index.html';
}

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

const postUrl = baseUrl + '/posts/' + id;

const form = document.querySelector('form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const featured = document.querySelector('#featured');
const message = document.querySelector('.container-message');

(async () => {
  try {
    const response = await fetch(postUrl);
    const details = await response.json();

    title.value = details.title;
    description.value = details.description;
    featured.value = details.featured;

    deleteButton(details.id);
  } catch (error) {
    console.error(error);
  } finally {
    form.style.display = 'block';
  }
})();

const editpost = e => {
  e.preventDefault();

  message.innerHTML = '';

  const titleValue = title.value.trim();
  const descriptionValue = description.value;
  const featuredValue = featured.value;

  if (titleValue.length === 0 || descriptionValue.length === 0) {
    return displayMessage(
      'warning',
      'Please ensure that you have entered correct',
      '.container-message',
    );
  }
  updatepost(titleValue, priceValue, descriptionValue, idValue, featuredValue);
};
form.addEventListener('submit', editpost);

const updatepost = async (title, description, featured) => {
  const url = baseUrl + '/posts';

  const data = JSON.stringify({
    title: title,
    description: description,
    featured: featured,
  });

  const options = {
    method: 'PUT',
    body: data,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.updated_at) {
      displayMessage('success', 'post updated', '.container-message');
    }
    if (json.error) {
      displayMessage('error', json.message, '.container-message');
    }
  } catch (error) {
    console.error(error);
  }
};
