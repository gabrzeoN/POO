import { dishes, drinks, desserts } from "./data";

window.onload = () => {
  new Restaurant(dishes, drinks, desserts);
}

class Modal {
  constructor() {
    this.element = null;
  }

  open(order) {
    const modal = document.createElement("div");
    const { dish, drink, dessert } = order;
    modal.innerHTML = `
      <div class="overlay">
        <div class="confirmar-pedido">
          <div class="titulo">Confirme seu pedido</div>
          <ul>
            <li class="prato">
              <div class="nome">${dish.name}</div>
              <div class="preco">${dish.price}</div>
            </li>
            <li class="bebida">
              <div class="nome">${drink.name}</div>
              <div class="preco">${drink.price}</div>
            </li>
            <li class="sobremesa">
              <div class="nome">${dessert.name}</div>
              <div class="preco">${dessert.price}</div>
            </li>
            <li class="total">
              <div>Total</div>
              <div class="preco">R$ ${order.getTotalPrice()}</div>
            </li>
          </ul>
          <button class="confirmar">Tudo certo, pode pedir!</button>
          <button class="cancelar">Cancelar</button>
        </div>
      </div>
      `

    this.element = modal;
    document.body.append(modal);
    this.setupButtons(order);
  }

  setupButtons(order) {
    document.querySelector(".confirmar").addEventListener("click", () => {
      order.sendWhatsApp()
    })
    document.querySelector(".cancelar").addEventListener("click", () => this.element.remove())
  }
}

class Restaurant {
  constructor(dishes, drinks, desserts) {
    this.dishes = this.buildDishes(dishes);
    this.drinks = this.buildDrinks(drinks);
    this.dessert = this.buildDesserts(desserts);
    this.order = new Order();
    this.orderButton = document.querySelector(".fazer-pedido");
  }

  onClickCallback(option) {
    if (option instanceof Dish) this.order.dish = option;
    if (option instanceof Drink) this.order.drink = option;
    if (option instanceof Dessert) this.order.dessert = option;

    if (this.order.isReady() && !this.orderButton.classList.contains("ativo")) this.enableOrderButton();
  }

  enableOrderButton() {
    this.orderButton.classList.add("ativo");
    this.orderButton.disabled = false;
    this.orderButton.innerHTML = "Fazer pedido";

    this.orderButton.addEventListener("click", () => new Modal().open(this.order))
  }

  buildDishes(dishes) {
    return dishes.map(({ name, image, description, price }) => {
      const dishContainer = document.querySelector(".opcoes.prato");
      const dish = new Dish(name, image, description, price);
      dish.draw(dishContainer, this.onClickCallback.bind(this));

      return dish;
    })
  }

  buildDrinks(drinks) {
    return drinks.map(({ name, image, description, price }) => {
      const drinkContainer = document.querySelector(".opcoes.bebida");
      const drink = new Drink(name, image, description, price);
      drink.draw(drinkContainer, this.onClickCallback.bind(this));

      return drink;
    })
  }

  buildDesserts(desserts) {
    return desserts.map(({ name, image, description, price }) => {
      const dessertContainer = document.querySelector(".opcoes.sobremesa");
      const dessert = new Dessert(name, image, description, price);
      dessert.draw(dessertContainer, this.onClickCallback.bind(this));

      return dessert;
    })
  }
}

class Order {
  constructor() {
    this.dish = null;
    this.drink = null;
    this.dessert = null;
  }

  isReady() {
    return this.dish && this.drink && this.dessert;
  }

  getTotalPrice() {
    return this.dish.price + this.drink.price + this.dessert.price;
  }

  sendWhatsApp() {
    const telefoneRestaurante = 553299999999;
    const encodedText = encodeURIComponent(
      `Olá, gostaria de fazer o pedido: \n- Prato: ${this.dish.name
      } \n- Bebida: ${this.drink.name} \n- Sobremesa: ${this.dessert.name
      } \nTotal: R$ ${this.getTotalPrice().toFixed(2)}`
    );

    const urlWhatsapp = `https://wa.me/${telefoneRestaurante}?text=${encodedText}`;
    window.open(urlWhatsapp);
  }
}

class Dish {
  constructor(name, image, description, price) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
    this.element = null;
    this.class = "prato";
  }

  draw(parentElement, callback) {
    const div = document.createElement("div");
    div.classList.add("opcao");
    div.addEventListener("click", () => { this.selectOption(callback) });

    div.innerHTML = `
      <img src="${this.image}" />
      <div class="titulo">${this.name}</div>
      <div class="descricao">${this.description}</div>
      <div class="fundo">
          <div class="preco">R$ ${this.price.toFixed(2)}</div>
          <div class="check">
              <ion-icon name="checkmark-circle"></ion-icon>
          </div>
      </div>
    `;

    this.element = div;
    parentElement.appendChild(div);
  }

  selectOption(callback) {
    // remove from all
    const before = document.querySelector(`.${this.class} .selecionado`);
    if (before) before.classList.remove("selecionado");
    this.element.classList.add("selecionado");

    callback(this);
  }

}

class Drink {
  constructor(name, image, description, price) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
    this.class = "bebida";
    this.element = null;
  }

  draw(parentElement, callback) {
    const div = document.createElement("div");
    div.classList.add("opcao");
    div.addEventListener("click", () => {
      this.selectOption(callback);
    });

    div.innerHTML = `
      <img src="${this.image}" />
      <div class="titulo">${this.name}</div>
      <div class="descricao">${this.description}</div>
      <div class="fundo">
          <div class="preco">R$ ${this.price.toFixed(2)}</div>
          <div class="check">
              <ion-icon name="checkmark-circle"></ion-icon>
          </div>
      </div>
    `;

    this.element = div;
    parentElement.appendChild(div);
  }

  selectOption(callback) {
    // remove from all
    const before = document.querySelector(`.${this.class} .selecionado`);
    if (before) before.classList.remove("selecionado");
    this.element.classList.add("selecionado");

    callback(this);
  }
}

class Dessert {
  constructor(name, image, description, price) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
    this.class = "sobremesa";
    this.element = null;
  }

  draw(parentElement, callback) {
    const div = document.createElement("div");
    div.classList.add("opcao");
    div.addEventListener("click", () => {
      this.selectOption(callback);
    });

    div.innerHTML = `
      <img src="${this.image}" />
      <div class="titulo">${this.name}</div>
      <div class="descricao">${this.description}</div>
      <div class="fundo">
          <div class="preco">R$ ${this.price.toFixed(2)}</div>
          <div class="check">
              <ion-icon name="checkmark-circle"></ion-icon>
          </div>
      </div>
    `;

    this.element = div;
    parentElement.appendChild(div);
  }

  selectOption(callback) {
    // remove from all
    const before = document.querySelector(`.${this.class} .selecionado`);
    if (before) before.classList.remove("selecionado");
    this.element.classList.add("selecionado");

    callback(this);
  }
}