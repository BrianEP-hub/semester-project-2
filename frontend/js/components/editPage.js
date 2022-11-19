import { baseUrl } from '../settings/api.js';
import createMenu from '../utils/createMenu.js';

createMenu();

const editposts = async post => {
  const postsUrl = baseUrl + '/posts';

  const container = document.querySelector('.container-post');

  try {
    const response = await fetch(postsUrl);
    const data = await response.json();

    data.forEach(post => {
      container.innerHTML += `
                            <div class="card">
                                        <div class="card-content">
                                        <h3>${post.title}</h3>
                                        <p>${post.shortInfo}</p>
                                        <a class="card-content-action" href="edit-post.html?id=${post.id}">Edit</a>
                                        </div>
                                    </div>
            
            `;
    });
  } catch (error) {
    console.dir(error);
  }
};

editposts();
