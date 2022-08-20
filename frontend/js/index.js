import createMenu from './utils/createMenu.js';
import { baseUrl, pathname } from './settings/api.js';
import { getPost, getFeatured } from './components/post.js';

createMenu();

const postUrl = baseUrl + '/posts';

(async () => {
  try {
    const resp = await fetch(postUrl);
    const data = await resp.json();

    if (pathname === '/' || pathname === '/index.html') {
      getFeatured(data);
    } else {
      getPost(data);
    }
  } catch (error) {
    console.error(error);
  }
})();
