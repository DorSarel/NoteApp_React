export const validateData = (title, body) => {
  return title !== '' && body !== '';
};

let ID = 0;
export const generateId = () => {
  return ID++;
};
