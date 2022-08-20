import { addPost } from '../utils/newPost.js';

export const addModal = () => {
  const button = document.querySelector('#add');
  const container = document.querySelector('.modal-add-posts');
  const close = document.querySelector('.close');

  if (button) {
    button.onclick = () => {
      container.style.display = 'block';
    };
  }
  close.onclick = () => {
    container.style.display = 'none';
  };
  addPost;
};
