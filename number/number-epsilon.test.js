const result = Math.abs(0.2 - 0.3 + 0.1);

test('epsilon test', () => {
    expect(result).toEqual(2.7755575615628914e-17);
    expect(result < Number.EPSILON).toBeTruthy();
});

// console.log(result);
// // expected output: 2.7755575615628914e-17

// console.log(result < Number.EPSILON);
// // expected output: true
