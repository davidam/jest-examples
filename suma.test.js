const suma = require('./suma');

test('sumar 11 + 27 es igual a 38', () => {
  expect(suma(11, 27)).toBe(38);
});
