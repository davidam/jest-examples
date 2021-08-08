const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

test('reduce test', () => {
    // 1 + 2 + 3 + 4    
    expect(array1.reduce(reducer)).toEqual(10);
    // 5 + 1 + 2 + 3 + 4    
    expect(array1.reduce(reducer, 5)).toEqual(15);    
});

