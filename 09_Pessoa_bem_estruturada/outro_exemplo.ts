class Personnn {
  name: string;
  private _age: number;
  readonly height: number;

	// construtores precisam ser publicos :)
  constructor(name: string, age: number, height: number) {
    this.name = name;
    this._age = age;
    this.height = height;
  }

	// oferecemos uma forma de ver a idade
  get age(): number {
		// aqui poderia caber alguma verificação
    return this._age;
  }

  set age(newAge: number) {
		// aqui poderia caber alguma verificação
    this._age = newAge;
  }
}

const personnn = new Personnn("Devinho", 18, 1.80);
personnn.age = 20; // erro!
// personnn.height = 1.09; // erro!
console.log(personnn.name);
console.log(personnn.age);
console.log(personnn.height);
