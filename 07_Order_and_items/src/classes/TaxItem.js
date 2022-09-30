import Item from "./Item.js";

export default class TaxItem extends Item {
  constructor(category, description, price){
    super(category, description, price);
    if (this.constructor === TaxItem) {
      throw new Error("This class can't be instantiated.");
    }
  }

  calculateTax(){
    return this.price * this.getTax();
  }

  getTax(){
    return 0;
  }
}