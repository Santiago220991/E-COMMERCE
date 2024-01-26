export const LowerToHigher = (a, b) => {
  return a.price - b.price;
};

export const HigherToLower = (a, b) => {
  return b.price - a.price;
};

export const ByName = (a, b) => {
  return a.title.localeCompare(b.title);
};
