const language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
};

language.current = 'EN';
language.current = 'FA';

// console.log(language.log);
// expected output: Array ["EN", "FA"]

test('language test', () => {
  expect(language.log).toEqual(["EN", "FA"]);
});
