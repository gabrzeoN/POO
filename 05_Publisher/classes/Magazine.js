export default class Magazine {
  constructor(title, author, articles, pages, ISBN) {
    this.title = title;
    this.author = author;
    this.articles = articles;
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

  getMainArticle() {
    return this.articles[0];
  }

  details() {
    console.log(this);
  }
}