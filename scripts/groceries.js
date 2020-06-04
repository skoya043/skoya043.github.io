	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 
var products = [{
    name: "brocoli",
    vegetarian: true,
    glutenFree: true,
    price: 1.99,
    organic: true
  },
  {
    name: "bread",
    vegetarian: true,
    glutenFree: false,
    price: 2.35,
    organic: false
  },
  {
    name: "salmon",
    vegetarian: false,
    glutenFree: true,
    price: 10.00,
    organic: false
  },
  {
    name: "pumpkin",
    vegetarian: true,
    glutenFree: true,
    price: 5.05,
    organic: true
  },
  {
    name: "pasta",
    vegetarian: true,
    glutenFree: false,
    price: 5.50,
    organic: false
  },
  {
    name: "crackers",
    vegetarian: true,
    glutenFree: true,
    price: 10.75,
    organic: false
  },
  {
    name: "avocado",
    vegetarian: true,
    glutenFree: true,
    price: 2.99,
    organic: true
  },
  {
    name: "milk",
    vegetarian: true,
    glutenFree: true,
    price: 8.50,
    organic: true
  },
  {
    name: "cheese",
    vegetarian: true,
    glutenFree: true,
    price: 12.99,
    organic: false
  },
  {
    name: "sugar",
    vegetarian: true,
    glutenFree: true,
    price: 4.52,
    organic: false
  }
];
	
// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	console.log([...products]);
	console.log([products]);

  let product_names = [...products];
  //the includes() method determines whether an array includes a certain value (restrictions is an array)
  if (restriction.includes("Vegetarian")) {
    product_names = product_names.filter(product => product.vegetarian);
  }
  if (restriction.includes("Organic")) {
    product_names = product_names.filter(product => product.organic);
  }
  if (restriction.includes("GlutenFree")) {
    product_names = product_names.filter(product => product.glutenFree);
  }
  return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
  totalPrice = 0;
  for (let i = 0; i < products.length; i += 1) {
    if (chosenProducts.indexOf(products[i].name) > -1) {
      totalPrice += products[i].price;
    }
  }
  return totalPrice;
}