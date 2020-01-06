export const validateData = (title, body) => {
  return title !== '' && body !== '';
};

export const updateStorage = (key, stringValue) => {
  localStorage.setItem(key, stringValue);
};

export const getDataFromStorage = key => {
  if (key === 'notes') {
    return getObjectFromStorage(key);
  } else {
    return getNumberFromStorage(key);
  }
};

const getObjectFromStorage = key => {
  return JSON.parse(localStorage.getItem(key), '[]');
};

const getNumberFromStorage = key => {
  const data = localStorage.getItem(key);
  if (!isNaN(data)) {
    return data;
  }
  return 0;
};
