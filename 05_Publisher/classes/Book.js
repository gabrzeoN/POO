import Publication from "./Publication";

export default class Book extends Publication {
  constructor(title, author, pages, ISBN) {
    super(title, author, pages, ISBN);
  }
}
