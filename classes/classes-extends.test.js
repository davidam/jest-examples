class DateFormatter extends Date {

  getFormattedDate() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }

}

datef = new DateFormatter('August 19, 1975 23:15:30').getFormattedDate();
// expected output: "19-Aug-1975"
test('datef test', () => {
    expect(datef).toEqual("19-Aug-1975");
});
