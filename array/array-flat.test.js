const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

// expected output: [0, 1, 2, [3, 4]]

test('index for arrays', () => {
    expect(arr1.flat()).toEqual([0, 1, 2, 3, 4]);
    expect(arr2.flat()).toEqual([0, 1, 2, [[3, 4]]]);        
    expect(arr2.flat(2)).toEqual([0, 1, 2, [3, 4]]);    
});
