class Polygon {
  constructor() {
    this.name = 'Polygon';
  }
}

const poly1 = new Polygon();

// console.log(poly1.name);
// expected output: "Polygon"

test('constructor tests', () => {
    expect(poly1.name).toEqual("Polygon");
});
