const tokenKey = 'token';
const userKey = 'user';

//User info

export const saveToken = token => {
  saveStorage(tokenKey, token);
};

export const getToken = () => {
  return getStorage(tokenKey);
};

export const saveUser = user => {
  const user = getStorage(userKey);
  if (user) {
    return user.username;
  }
  return null;
};

//local storage
const saveStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
const getStorage = key => {
  const value = localStorage.getItem(key);

  if (!value) {
    return [];
  }
  return JSON.parse(value);
};
export const clearStorage = () => {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userKey);
};
