import Authentication from "./Authentication.js";
import Storage from "./Storage.js";
import Ram from "./Ram.js";

export default class Computer {
  constructor(ramSize, storageSize) {
    this.authentication = new Authentication();
    this.storage = new Storage(storageSize);
    this.ram = new Ram(ramSize);
    
  }

  login(username, password) {
    this.authentication.login(username, password);
  }

  logout(username) {
    this.authentication.logout(username);
  }

  install(program) {
    this.storage.install(program);
  }

  desinstall(programName) {
    this.storage.desinstall(programName);
  }

  execute(programName) {
    if (!this.authentication.user) {
      console.log("You must login first");
      return;
    }

    const program = this.storage.getProgram(programName);
    if (!program) {
      console.log("You need to install it first");
      return;
    }

    if (this.ram.space <= program.ram) {
      console.log("You don't have enough space on ram.");
      return;
    }

    program.running = true;
    program.run(this);
    this.ram.alloc(program.ram);
  }

  stop(programName) {
    if (!this.authentication.user) {
      console.log("You must login first");
      return;
    }

    const program = this.storage.getProgram(programName);
    program.running = false;
    this.ram.free(program.ram);
  }
}