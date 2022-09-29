

export default class Order {
constructor(){
    this.items = [];
  }

  addItem(item){
    this.items.push(item);
  }

  getTotal(){
    let sum = 0;
    this.items.forEach((item) => sum += item.price);
    return sum;
  }

  getTaxes(){
    let sum = 0;
    this.items.forEach((item) => sum += (item.price * this.__getTaxPercentage(item.category)));
    return sum;
  }

  __getTaxPercentage(category){
    if(category === "Beer"){
      return 0.2
    }else if(category === "Cigar"){
      return 0.25;
    } else if(category === "Eletronics"){
      return 0.3;
    } else if(category === "Water"){
      return 0;
    }
    return 0;
  }
}