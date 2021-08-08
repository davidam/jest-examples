const elements = ['Fire', 'Air', 'Water'];

test('test join for arrays', () => {
    expect(elements.join()).toEqual("Fire,Air,Water");
    expect(elements.join('')).toEqual("FireAirWater");
    expect(elements.join('-')).toEqual("Fire-Air-Water");
});

