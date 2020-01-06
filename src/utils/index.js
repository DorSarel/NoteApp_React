let ID = 0;
export const generateId = () => {
  return ID++;
};

export const validateData = (title, body) => {
  return title !== '' && body !== '';
};

export const updateStorage = (key, stringValue) => {
  localStorage.setItem(key, stringValue);
};
