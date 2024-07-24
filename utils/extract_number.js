const extractNumberFromArray = (array) => {
  return array.map((item) => {
    const match = item.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  });
};

export { extractNumberFromArray };
