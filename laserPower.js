const calculatePower = (arr) => {
  let newArr = arr
    //Mutiply all nums in array by 2
    .map((e) => e * 2)
    //Add all those numbers together
    .reduce((total, currentValue) => {
      return total + currentValue;
    }, 0);

  return newArr;
};
