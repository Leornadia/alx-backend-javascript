
const cleanSet = (set, startString) => {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const filteredValues = [...set]
    .filter(value => typeof value === 'string' && value.startsWith(startString))
    .map(value => value.slice(startString.length));

  return filteredValues.join('-');
};

export default cleanSet;
