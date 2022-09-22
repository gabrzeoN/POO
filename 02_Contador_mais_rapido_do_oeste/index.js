class Counter {
  constructor(initialValue, key, element){
    this.counter = initialValue;
    this.key = key;
    this.element = element;

    this.increse();
    this.draw();
  }

  increse(){
    document.body.addEventListener("keyup", (e) => {
      if(e.key === this.key){
        this.counter++;
        this.draw();
      }
    });
  }

  draw(){
    this.element.textContent = this.counter;
  }
}

window.onload = () => {
  new Counter(5, "a", document.querySelector(".counter-a"));
  new Counter(5, "b", document.querySelector(".counter-b"));
}


/* ------- Inicial ---------
//
window.onload = () => {
  let counter = 0;
  const counterElement = document.querySelector(".counter");

  function updateCounter() {
    counterElement.textContent = counter;
  }

  document.body.addEventListener("keyup", (e) => {
    const { key } = e;
    if (key === "a") {
      counter++;
      updateCounter();
    }
  });
}
//
*/