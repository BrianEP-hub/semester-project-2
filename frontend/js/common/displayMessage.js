export const displayMessage = (type, message, targetElement) => {
  const msg = document.querySelector(targetElement);

  msg.innerHtml = `<div class="message=${type}">${message}</div>`;
};
