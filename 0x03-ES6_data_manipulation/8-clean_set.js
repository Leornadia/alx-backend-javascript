
const cleanSet = (set, startString) => {
    const filteredValues = [...set].filter(value => value.startsWith(startString)).map(value => value.slice(startString.length)).join('-');
    return filteredValues;
};

export default cleanSet;
