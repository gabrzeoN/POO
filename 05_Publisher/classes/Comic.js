export default class Comic {
  constructor(title, author, illustrator, pages, ISBN) {
    this.title = title;
    this.author = author;
    this.illustrator = illustrator;
    this.pages = pages;
    this.ISBN = ISBN;
    this.progress = 0;
  }

  read(pages) {
    if(this.finished()) {
      console.log("You already finished this!");
      return;
    } 

    if(this.pages >= (this.progress + pages)) {
      this.progress += pages;
    } 
  }

  finished() {
    return this.progress === this.pages;
  }

  showIllustrator() {
    console.log(`Illustrated by: ${this.illustrator}`);
  }

  details() {
    console.log(this);
  }
}