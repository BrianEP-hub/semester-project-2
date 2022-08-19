import { displayMessage } from '../common/displayMessage.js';
import { getToken } from './storage.js';
import { baseUrl } from '../settings/api.js';
import createMenu from './createMenu.js';

createMenu();
const token = getToken();

if (!token) {
  location.href = 'index.html';
}

const form = document.querySelector('#addpost');
const title = document.querySelector('#title');
const featured = document.querySelector('#featured');
const description = document.querySelector('#description');
const message = document.querySelector('.container-message');

const submitForm = e => {
  e.preventDefault();

  message.innerHTML = '';

  const titleValue = title.value.trim();
  const descriptionValue = description.value;
  const featuredValue = featured.value;

  if (titleValue.length === 0 || descriptionValue === 0) {
    return displayMessage(
      'warning',
      'Please ensure that you have the correct inputs',
      '.container-message',
    );
  }

  addpost(titleValue, priceValue, descriptionValue, featuredValue, imageValue);
};
form.addEventListener('submit', submitForm);

export const addpost = async (title, description, featured) => {
  const url = baseUrl + '/posts';

  const data = JSON.stringify({
    title: title,
    description: description,
    featured: featured,
  });

  const options = {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.created_at) {
      displayMessage('success', 'post added', '.container-message');
      form.reset();
    }

    if (json.error) {
      displayMessage('error', json.message, '.container-message');
    }
  } catch (error) {
    console.dir(error);
    displayMessage('error', 'Something went wrong', '.container-message');
  }
};
