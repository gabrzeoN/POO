import TaxItem from "./TaxItem.js";

export default class Eletronics extends TaxItem {
  constructor(description, price){
    super('Eletronics', description, price);
  }

  getTax(){
    return 0.3;
  }
}