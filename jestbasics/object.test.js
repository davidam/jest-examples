test('asignacion de objeto', () => {
  const data = {uno: 1};
  data['dos'] = 2;
  expect(data).toEqual({uno: 1, dos: 2});
});
