
test('filter for arrays', () => {
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const result = words.filter(word => word.length > 6);
    expect(result).toEqual(["exuberant", "destruction", "present"]);
});
