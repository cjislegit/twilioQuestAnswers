const scanAndFilter = (arr, filter) => {
  let filteredArr = arr.filter((e) => {
    return e !== filter;
  });
  return filteredArr;
};
