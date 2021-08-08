const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

test('lastIndexOf test', () => {
    expect(animals.lastIndexOf('Dodo')).toEqual(3);
    expect(animals.lastIndexOf('Tiger')).toEqual(1);    
});

