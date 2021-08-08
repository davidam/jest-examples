const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
const array1 = [1, 30, 4, 21, 100000];
array1.sort();

test('index for arrays', () => {
    expect(months).toEqual(["Dec", "Feb", "Jan", "March"]);
    expect(array1).toEqual([1, 100000, 21, 30, 4]);    
});

