const numbers = [5, 6, 2, 3, 7];
const min = Math.min.apply(null, numbers);
const max = Math.max.apply(null, numbers);

test('max, min tests', () => {
    expect(max).toEqual(7);
    expect(min).toEqual(2);    
});

