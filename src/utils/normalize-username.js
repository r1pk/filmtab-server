export const normalizeUsername = (username) => {
  return username.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
};
