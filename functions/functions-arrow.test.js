const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

l = materials.map(material => material.length);
test('map test', () => {
  expect(l).toEqual([8, 6, 7, 9]);
});

// expected output: Array [8, 6, 7, 9]
