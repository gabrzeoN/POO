import TaxItem from "./TaxItem.js";

export default class Beer extends TaxItem {
  constructor(description, price){
    super('Beer', description, price);
  }

  getTax(){
    return 0.2;
  }
}