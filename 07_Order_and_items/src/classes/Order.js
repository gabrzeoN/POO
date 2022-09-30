import TaxItem from "./TaxItem.js";

export default class Order {
constructor(){
    this.items = [];
  }

  addItem(item){
    this.items.push(item);
  }

  getTotal(){
    let sum = this.getTotalWithNoTax();
    sum += this.getTaxes();
    return sum;
  }

  getTotalWithNoTax(){
    let sum = 0;
    this.items.forEach((item) => sum += item.price);
    return sum;
  }

  getTaxes(){
    let sum = 0;
    this.items.forEach((item) => {
      if(item instanceof TaxItem){
        sum += item.calculateTax();
      }
    });
    return sum;
  }
}