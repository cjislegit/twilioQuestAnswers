class Ducktypium {
  constructor(crystalColor) {
    if (crystalColor === 'red') {
      this.color = crystalColor;
    } else if (crystalColor === 'blue') {
      this.color = crystalColor;
    } else if (crystalColor === 'yellow') {
      this.color = crystalColor;
    } else {
      throw 'Wrong color';
    }
    this.calibrationSequence = [];
  }

  refract(newColor) {
    try {
      if (newColor !== 'red' && newColor !== 'blue' && newColor !== 'yellow') {
        throw 'Wrong color';
      }
    } catch (error) {
      return error;
    }
    if (this.color === newColor) {
      return newColor;
    } else if (
      (this.color === 'red' && newColor === 'blue') ||
      (this.color === 'blue' && newColor === 'red')
    ) {
      return 'purple';
    } else if (
      (this.color === 'yellow' && newColor === 'red') ||
      (this.color === 'red' && newColor === 'yellow')
    ) {
      return 'orange';
    } else if (
      (this.color === 'yellow' && newColor === 'blue') ||
      (this.color === 'blue' && newColor === 'yellow')
    ) {
      return 'green';
    }
  }

  calibrate(arr) {
    arr.sort((a, b) => a - b);
    this.calibrationSequence = arr.map((e) => e * 3);
  }
}

// Create a new instance of the class
const dt = new Ducktypium('blue');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
