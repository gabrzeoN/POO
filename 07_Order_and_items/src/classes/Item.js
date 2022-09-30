export default class Item {
  constructor(category, description, price){
    if (this.constructor === Item) {
      throw new Error("This class can't be instantiated.");
    }
    this.category = category;
    this.description = description;
    this.price = price;
  }
}
