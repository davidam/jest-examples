const array1 = [5, 12, 8, 130, 44];

let index = 2;

test('index for arrays', () => {
    expect(array1[2]).toEqual(8);
    expect(array1[-2]).toEqual(undefined);    
});

