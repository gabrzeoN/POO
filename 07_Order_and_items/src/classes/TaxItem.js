import Item from "./Item.js";

export default class TaxItem extends Item {
  constructor(category, description, price){
    super(category, description, price);
  }

  calculateTax(percentage){
    return ((percentage / 100) * this.price);
  }
}