class Materializer {
  constructor(target) {
    this.target = target;
    this.activated = false;
  }
  activate() {
    this.activated = true;
  }
  materialize() {
    if (this.activated) {
      return this.target;
    } else {
      return undefined;
    }
  }
}

const m = new Materializer('Carlos');
console.log(m.activated); // would print "false"

m.activate();
console.log(m.activated); // would print "true"

console.log(m.materialize()); // would print "Kevin"
