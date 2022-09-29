export default class Program {
  constructor(name, size, ram, run) {
    this.name = name;
    this.size = size;
    this.ram = ram;
    this.run = run;
    this.running = false;
  }
}
