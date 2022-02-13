/**
 * @title: Reduce Array into Single Objce
 */

const products = [
  { name: "Javascript Cookbook", price: 350 },
  { name: "Head First Python", price: 200 },
  { name: "Head First Java", price: 400 },
  { name: "Javascript Cookbook", price: 350 },
  { name: "Head First Java", price: 400 },
  { name: "Javascript Cookbook", price: 350 },
  { name: "Javascript Cookbook", price: 350 },
  { name: "Head First C", price: 300 },
];

const invoice = products.reduce((acc, cur) => {
  if (acc[cur.name]) {
    acc[cur.name].quantity++;
    acc[cur.name].price += cur.price;
  } else {
    acc[cur.name] = {
      price: cur.price,
      quantity: 1,
    };
  }
  return acc;
}, {});

const totalPice = Object.values(invoice).reduce((acc, cur)=>{
    acc += cur.price;
    return acc
}, 0)
console.log(invoice, totalPice);
