const array1 = [1, 2, 3];
const pets = ['cat', 'dog', 'bat'];

test('test includes for arrays', () => {
    expect(array1.includes(2)).toBeTruthy();
    expect(pets.includes('cat')).toBeTruthy();
    expect(pets.includes('at')).toBeFalsy();    
});

