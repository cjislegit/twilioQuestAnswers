const scan = (arg) => {
  let output = [];
  arg.forEach((element, i) => {
    if (element === 'contraband') {
      output.push(i);
    }
  });
  return output;
};
