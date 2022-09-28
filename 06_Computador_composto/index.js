class Computer {
  constructor(ram, storage) {
    this.user = null;
    this.ram = ram;
    this.storage = storage;
    this.programs = [];
  }

  login(username, password) {
    console.log("You are now logged into the system");
    this.user = { username, password };
  }

  logout(username) {
    if (this.user.username === username) {
      console.log("You are now out of the system");
      this.user = null;
    }
  }

  install(program) {
    const { size } = program;
    if (this.storage >= size) {
      this.programs.push(program);
      this.storage -= size;
    } else {
      console.log("You don't have enough space on storage.");
    }
  }

  desinstall(programName) {
    this.programs = this.programs.filter({ name } !== programName);
  }

  getProgramFromStorage(programName) {
    return this.programs.find(({ name }) => name === programName);
  }

  execute(programName) {
    if (!this.user) {
      console.log("You must login first");
      return;
    }

    const program = this.getProgramFromStorage(programName);
    if (!program) {
      console.log("You need to install it first");
      return;
    }

    if (this.ram <= program.ram) {
      console.log("You don't have enough space on ram.");
      return;
    }

    program.running = true;
    program.run(this);
  }

  stop(programName) {
    if (!this.user) {
      console.log("You must login first");
      return;
    }

    const program = this.getProgramFromStorage(programName);
    program.running = false;
    freeRam(program.ram);
  }

  freeRam(size) {
    this.ram += size;
  }
}

const computer = new Computer(1024, 1024);
console.log(computer);
computer.login("didi", "t5");
computer.install({ name: "VSCode", size: 32, ram: 3, run: () => console.log("You now are running VSCode.") });
computer.install({ name: "top", size: 1, ram: 1, run: (computer) => computer.programs.forEach(program => program.running ? console.log(`> ${program.name} is running`) : "") })
computer.execute("VSCode");
computer.execute("top");