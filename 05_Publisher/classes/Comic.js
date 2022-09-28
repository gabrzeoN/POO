import Publication from "./Publication";

export default class Comic extends Publication {
  constructor(title, author, illustrator, pages, ISBN) {
    super(title, author, pages, ISBN);
    this.illustrator = illustrator;
  }

  showIllustrator() {
    console.log(`Illustrated by: ${this.illustrator}`);
  }
}
