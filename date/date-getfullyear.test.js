const moonLanding = new Date('July 20, 69 00:20:18');

test('getFullYear test', () => {
    expect(moonLanding.getFullYear()).toEqual(1969);
});

// console.log(moonLanding.getFullYear());
// expected output: 1969
