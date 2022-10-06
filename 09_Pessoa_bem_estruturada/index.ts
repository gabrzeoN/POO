class Person {
  private _firstname: string;
  private _lastname: string;
  readonly age: number;
  private _cpf: string;

  constructor(firstname: string, lastname: string, age: number, cpf: string){
    this._firstname = firstname;
    this._lastname = lastname;
    this.age = age;
    this._cpf = cpf;
  }

  get name(){
    return this._firstname + " " + this._lastname;
  }

  get cpf(){
    return this._cpf;
  }

  set cpf(newCpf: string){
    if(newCpf.length !== 11){
      throw new Error("CPF must have 11 digits");
    }
    this._cpf = newCpf;
  }
}

const person = new Person("gab", "cari", 22, "11111111");
console.log(person.name);
person.cpf = "12345678901";
console.log(person.cpf);