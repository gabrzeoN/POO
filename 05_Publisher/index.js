import Book from "./classes/Book";
import Comic from "./classes/Comic";
import Magazine from "./classes/Magazine";

window.onload = () => {
  document.querySelector(".book").addEventListener("click", createNewBook);
  document.querySelector(".comic").addEventListener("click", createNewComic);
  document.querySelector(".magazine").addEventListener("click", createNewMagazine);
}

function createNewBook() {
  const book = new Book("I promise you", "JavaScript", 100, "12038019823091809");
  book.read(10);
  book.details();
}

function createNewComic() {
  const comic = new Comic("Container Man", "Docker", "Developers", 200, "1923801238012201");
  comic.read(20);
  comic.showIllustrator();
  comic.details();
}

function createNewMagazine() {
  const magazine = new Magazine("Dev Gossip", "Driven", ["Is the end of JavaScript?", "Can i get rich coding?"], 300, "192301230903921");
  magazine.read(300);
  console.log(magazine.getMainArticle());
  magazine.details();
}