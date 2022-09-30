import Item from "./Item.js";

export default class Water extends Item {
  constructor(description, price){
    super('Water', description, price);
  }
}