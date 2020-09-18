class Ducktypium {
  constructor(crystalColor) {
    this.color = crystalColor;
    this.calibrationSequence = [];
    try {
      if (
        this.color !== 'red' &&
        this.color !== 'blue' &&
        this.color !== 'yellow'
      ) {
        throw 'Wrong color';
      }
    } catch (error) {
      return error;
    }
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
}

const m = new Ducktypium('p');
console.log(m.refract('p'));
