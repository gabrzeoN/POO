import Beer from "./classes/Beer.js"
import Cigar from "./classes/Cigar.js"
import Eletronics from "./classes/Eletronics.js"
import Water from "./classes/Water.js"
import Item from "./classes/Item.js"
import TaxItem from "./classes/TaxItem.js"
import Order from "./classes/Order.js"

console.log("o--------------------o")

const agua = new Water("aguinha", 100)
const cerveja = new Beer('cervejinha', 100)
const cigarro = new Cigar('ainncigarrinho', 100)

const pedido = new Order();
pedido.addItem(agua)
pedido.addItem(cerveja)
pedido.addItem(cigarro)

console.log(agua)
console.log(pedido.getTotal())
console.log(cerveja.getTax())

console.log("o--------------------o")