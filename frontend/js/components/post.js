import { baseUrl as url } from '../settings/api.js';

export const getPost = posts => {
  const postContainer = document.querySelector('.container-post');

  postContainer.innerHTML = '';

  posts.forEach(post => {
    postContainer.innerHTML += `
                            <div class="card">
                                <div class="card-title">
                               <h3>${post.title}</h3>
                               </div>
                                <div class="card-content">
                                    <p>${post.shortInfo}</p>
                                        <a class="card-content-action href="details.html?id=${post.id}">
                                        Read more
                                        </a>
                                </div>
                            </div>
        `;
  });
};

export const getFeatured = posts => {
  const featuredContainer = document.querySelector('.container-featured');

  featuredContainer.innerHTML = '';

  posts.forEach(post => {
    featuredContainer.innerHTML += `
                            <div class="card">
                                <div class="card-title">
                               <h3>${post.title}</h3>
                               </div>
                                <div class="card-content">
                                    <p>${post.shortInfo}</p>
                                        <a class="card-content-action href="details.html?id=${post.id}">
                                        Read more
                                        </a>
                                </div>
                            </div>
        `;
  });
};
