import Publication from "./Publication";

export default class Magazine extends Publication {
  constructor(title, author, articles, pages, ISBN) {
    super(title, author, pages, ISBN);
    this.articles = articles;
  }

  getMainArticle() {
    return this.articles[0];
  }
}
