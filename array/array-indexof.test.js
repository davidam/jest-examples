const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
test('index for arrays', () => {
    expect(beasts.indexOf('bison')).toEqual(1);
    expect(beasts.indexOf('duck')).toEqual(3);
    expect(beasts.indexOf('ant')).toEqual(0);    
});
