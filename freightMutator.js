const mutate = (arr) => {
  let newArr = arr.map((e) => {
    return e.toUpperCase();
  });
  return newArr;
};

console.log(mutate(['apples', 'ray guns', 'oranges']));
