import Order from "./../src/classes/Order.js";
import Beer from "../src/classes/Beer.js";
import Water from "../src/classes/Water.js";
import Cigar from "../src/classes/Cigar.js";
import Eletronics from "../src/classes/Eletronics.js";

test("Deve criar um pedido e calcular o total", () => {
  const order = new Order();
  order.addItem(new Beer("Brahma", 6));
  order.addItem(new Cigar("Malboro", 10));
  order.addItem(new Eletronics("IPhone 13", 13000));
  order.addItem(new Water("Crystal", 1));
  const total = order.getTotalWithNoTax();
  expect(total).toBe(13017);
});

test("Deve criar um pedido e calcular os impostos", () => {
  const order = new Order();
  order.addItem(new Beer("Brahma", 6));
  order.addItem(new Cigar("Malboro", 10));
  order.addItem(new Eletronics("IPhone 13", 13000));
  order.addItem(new Water("Crystal", 1));
  const taxes = order.getTaxes();
  expect(taxes).toBe(3903.7);
});
