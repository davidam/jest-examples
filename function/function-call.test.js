function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

c = new Food('cheese', 5).name;

test('call tests', () => {
    expect(c).toEqual("cheese");
});

//console.log(new Food('cheese', 5).name);
// expected output: "cheese"
