const array1 = [1, 2, 3];

const firstElement = array1.shift();

test('shift test', () => {
    expect(array1).toEqual([2, 3]);
    expect(1).toEqual(firstElement);    
});

