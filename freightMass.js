const calculateMass = (arr) => {
  let totalMass = 0;
  totalMass = arr.reduce((total, currentValue) => {
    return total + currentValue.length;
  }, 0);
  return totalMass;
};
const cargo = ['cat', 'dog', 'bird'];

const mass = calculateMass(cargo);

console.log(mass);
