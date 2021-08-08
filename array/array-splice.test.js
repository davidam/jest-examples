const months = ['Jan', 'March', 'April', 'June'];

test('splice test', () => {
    months.splice(1, 0, 'Feb');
    expect(months).toEqual(["Jan", "Feb", "March", "April", "June"]);
    months.splice(4, 1, 'May');
    expect(months).toEqual(["Jan", "Feb", "March", "April", "May"]);
});

