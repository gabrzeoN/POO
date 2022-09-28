export default class Book {
  constructor(title, author, pages, ISBN) {
    this.title = title;
    this.author = author;
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

  details() {
    console.log(this);
  }
}